/**
 * @File   : Actor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/30/2018, 11:06:01 PM
 * @Description:
 */
import * as Sein from 'seinjs';

/**
 * 判断一个实例是否为`PostProcessingSystemActor`。
 */
export function isActor(
  value: Sein.SObject
): value is Actor {
  return (value as Actor).isPostProcessingSystemActor;
}

/**
 * 一个Pass的接口类型。
 */
export interface IPass {
  /**
   * Pass名称，将用于缓存。
   */
  name: string;
  /**
   * 片段着色器。默认有上一次处理结果纹理`uniform u_preMap`、原始画面渲染纹理`uniform u_origMap`和UV坐标`varying v_texcoord0`三个变量。
   */
  fs: string;
  /**
   * FrameBuffer的设置，也可以指定`scaleW`和`scaleH`来对每一个Pass的渲染尺寸进行缩放。
   */
  frameOptions?: Sein.IFrameBufferOptions & {scaleW?: number, scaleH?: number};
  /**
   * 要自己添加的`uniforms`。
   */
  uniforms?: {[name: string]: Sein.IMaterialUniform};
  /**
   * 每一次渲染的时候都会调用，用于更新`uniforms`。
   */
  updateUniforms?(uniforms: {[name: string]: Sein.IMaterialUniform}): void;
}

/**
 * @hidden
 */
function isNumber(value: any): value is number {
  return !!(value as number).toPrecision;
}

/**
 * @hidden
 */
function isNumberArray(value: any): value is number[] {
  return !!(value as number[]).push;
}

/**
 * DomHUD.Component的一个容器封装，但添加了一些特别的功能使其可以追踪其他Actor。
 * 
 * @template IStateTypes 可进行初始化参数扩展。
 * @template IEvents 可扩展事件类型。
 * @noInheritDoc
 */
@Sein.SClass({className: 'PostProcessingSystemActor'})
export default class Actor<IOptionTypes extends Object = {}> extends Sein.RenderSystemActor<IOptionTypes> {
  public isPostProcessingSystemActor = true;

  private _frontBuffer: Sein.FrameBuffer;
  private _backBuffer: Sein.FrameBuffer;
  private _passes: IPass[] = [];

  /**
   * 验证是否在添加多个后处理系统。
   */
  public verifyAdding() {
    if (Sein.findActorByFilter(this.getGame(), isActor)) {
      throw new Sein.MemberConflictException(
        this.getGame(),
        'PostProcessingSystemActor',
        this.name,
        this,
        'You can only have one `PostProcessingSystemActor` in the same time.'
      );
    }
  }

  /**
   * 初始化，继承请先调用`super.onInit`。
   */
  public onInit(initState: IOptionTypes) {
    super.onInit(initState);
    const game = this.getGame();

    this._frontBuffer = new Sein.FrameBuffer(game);
    this._backBuffer = new Sein.FrameBuffer(game);
  }

  /**
   * 渲染之前，继承请先调用`super.onPreRender`。
   */
  public onPreRender(initState: IOptionTypes) {
    if (this._passes.length > 0) {
      this.getGame().renderer.useFramebuffer = true;
    }
  }

  /**
   * 渲染之后，后处理的主要逻辑，继承请先调用`super.onPostRender`。
   */
  public onPostRender(initState: IOptionTypes) {
    const length = this._passes.length;

    if (length <= 0) {
      return;
    }

    let preBuffer = (this.getGame().renderer as any).framebuffer;
    let currentBuffer = this._frontBuffer;

    for (let index = 0; index < length; index += 1) {
      this.draw(index === length - 1, this._passes[index], preBuffer, currentBuffer);

      const tmp = index === 0 ? this._backBuffer : preBuffer;
      preBuffer = currentBuffer;
      currentBuffer = tmp;
    }
  }

  private draw(
    isLast: boolean,
    pass: IPass,
    preBuffer: Sein.FrameBuffer,
    currentBuffer: Sein.FrameBuffer
  ) {
    const game = this.getGame();
    const {renderer} = game;
    const state = (renderer as any).state;
    const gl = renderer.gl;

    const {name, fs, uniforms, updateUniforms, frameOptions} = pass;

    let width = 0;
    let height = 0;

    if (!isLast) {
      if (frameOptions.scaleW) {
        width = ~~(renderer.width * frameOptions.scaleW);
      } else if (frameOptions.width) {
        width = frameOptions.width;
      } else {
        width = renderer.width;
      }

      if (frameOptions.scaleH) {
        height = ~~(renderer.height * frameOptions.scaleH);
      } else if (frameOptions.height) {
        height = frameOptions.height;
      } else {
        height = renderer.height;
      }

      if (width !== (currentBuffer as any).width || height !== (currentBuffer as any).height) {
        currentBuffer.resize(width, height);
      }

      state.viewport(0, 0, width, height);
    } else {
      state.viewport(0, 0, renderer.width, renderer.height);
    }

    uniforms.u_origMap.value = (renderer as any).framebuffer.texture;
    uniforms.u_preMap.value = preBuffer.texture;
    if (updateUniforms) {
      updateUniforms(uniforms);
    }

    if (isLast) {
      game.renderer.useFramebuffer = false;
      state.bindSystemFramebuffer();
    } else {
      currentBuffer.bind();
    }

    const screenVert = Sein.Shader.shaders['screen.vert'];
    const screenFrag = fs;

    state.disable(Sein.Constants.DEPTH_TEST);
    state.disable(Sein.Constants.CULL_FACE);
    state.disable(Sein.Constants.BLEND);
    if (renderer.clearColor) {
      gl.clearColor(renderer.clearColor.r, renderer.clearColor.g, renderer.clearColor.b, renderer.clearColor.a);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    const shader = (Sein.Shader.getCustomShader as any)(screenVert, screenFrag, '', `post-processing-${this.name}-${name}`);
    const program = Sein.Program.getProgram(shader, state);
    program.useProgram();

    const vaoId = program.id;
    const vao = (Sein.VertexArrayObject as any).getVao(gl, vaoId, {
      mode: Sein.Constants.TRIANGLE_STRIP
    });

    let x = 0;
    let y = 0;
    width = 1;
    height = 1;
    if (vao.isDirty) {
      vao.isDirty = false;
      x = x * 2 - 1;
      y = 1 - y * 2;
      width *= 2;
      height *= 2;
      const vertices = [x, y, x + width, y, x, y - height, x + width, y - height];
      vao.addAttribute(new Sein.GeometryData(new Float32Array(vertices), 2), (program.attributes as any).a_position);
      vao.addAttribute(new Sein.GeometryData(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), 2), (program.attributes as any).a_texcoord0);
    }

    // tslint:disable-next-line:forin
    for (const key in uniforms) {
      const {value} = uniforms[key];
      const programInfo = program.uniforms[key];
      if (value && programInfo) {
        program[key] = Sein.isTexture(value)
          ? Sein.Semantic.handlerTexture(value, programInfo.textureIndex)
          : isNumber(value) || isNumberArray(value)
            ? value : value.elements;
      }
    }

    vao.draw();
  }

  /**
   * 添加一个Pass。
   */
  public addPass(pass: IPass) {
    pass.uniforms = pass.uniforms || {u_preMap: {value: null}, u_origMap: {value: null}};
    pass.uniforms.u_origMap = pass.uniforms.u_origMap || {value: null};
    pass.uniforms.u_preMap = pass.uniforms.u_preMap || {value: null};
    pass.frameOptions = pass.frameOptions || {};

    this._passes.push(pass);
  }

  /**
   * 批量添加Pass。
   */
  public addPasses(passes: IPass[]) {
    passes.forEach(pass => {
      this.addPass(pass);
    });
  }

  /**
   * 移除一个指定索引的Pass。
   */
  public removePass(index: number) {
    if (index < 0 || index >= this._passes.length) {
      return;
    }

    this._passes.splice(index, 1);
  }

  /**
   * 清楚所有Pass。
   */
  public clearPasses() {
    this._passes = [];
  }
}
