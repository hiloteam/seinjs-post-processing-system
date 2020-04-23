[seinjs-post-processing-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [PostProcessingSystem](../modules/_seinjs_.postprocessingsystem.md) > [IPass](../interfaces/_seinjs_.postprocessingsystem.ipass.md)

# Interface: IPass

## Hierarchy

 [IPass](ipass.md)

**↳ IPass**

## Index

### Properties

* [frameOptions](_seinjs_.postprocessingsystem.ipass.md#frameoptions)
* [fs](_seinjs_.postprocessingsystem.ipass.md#fs)
* [name](_seinjs_.postprocessingsystem.ipass.md#name)
* [uniforms](_seinjs_.postprocessingsystem.ipass.md#uniforms)

### Methods

* [updateUniforms](_seinjs_.postprocessingsystem.ipass.md#updateuniforms)

---

## Properties

<a id="frameoptions"></a>

### `<Optional>` frameOptions

**● frameOptions**: *`IFrameBufferOptions` & `object`*

*Inherited from [IPass](ipass.md).[frameOptions](ipass.md#frameoptions)*

*Defined in Actor.ts:33*

FrameBuffer的设置，也可以指定`scaleW`和`scaleH`来对每一个Pass的渲染尺寸进行缩放。

___
<a id="fs"></a>

###  fs

**● fs**: *`string`*

*Inherited from [IPass](ipass.md).[fs](ipass.md#fs)*

*Defined in Actor.ts:29*

片段着色器。默认有上一次处理结果纹理`uniform u_preMap`、原始画面渲染纹理`uniform u_origMap`和UV坐标`varying v_texcoord0`三个变量。

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from [IPass](ipass.md).[name](ipass.md#name)*

*Defined in Actor.ts:25*

Pass名称，将用于缓存。

___
<a id="uniforms"></a>

### `<Optional>` uniforms

**● uniforms**: *`object`*

*Inherited from [IPass](ipass.md).[uniforms](ipass.md#uniforms)*

*Defined in Actor.ts:37*

要自己添加的`uniforms`。

#### Type declaration

[name: `string`]: `IMaterialUniform`

___

## Methods

<a id="updateuniforms"></a>

### `<Optional>` updateUniforms

▸ **updateUniforms**(uniforms: *`object`*): `void`

*Inherited from [IPass](ipass.md).[updateUniforms](ipass.md#updateuniforms)*

*Defined in Actor.ts:41*

每一次渲染的时候都会调用，用于更新`uniforms`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| uniforms | `object` |

**Returns:** `void`

___

