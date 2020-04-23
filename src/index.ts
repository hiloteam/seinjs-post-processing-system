/**
 * @File   : PostProcessingSystem.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018/9/25 上午11:58:00
 * @Description:
 */
import * as Sein from 'seinjs';

import PostProcessingSystemActor, {IPass as TPass, isActor as isPostProcessingSystemActor} from './Actor';

declare module 'seinjs' {
  export namespace PostProcessingSystem {
    export interface IPass extends TPass {}
    export class Actor<IOptionTypes extends Object = {}> extends PostProcessingSystemActor<IOptionTypes> {}
    export function isActor(value: Sein.SObject): value is Actor;
  }
}

(Sein as any).PostProcessingSystem = {
  Actor: PostProcessingSystemActor,
  isActor: isPostProcessingSystemActor
};

export {
  TPass as IPass,
  PostProcessingSystemActor as Actor,
  isPostProcessingSystemActor as isActor
};
