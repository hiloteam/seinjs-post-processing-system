[seinjs-post-processing-system](../README.md) > [IPass](../interfaces/ipass.md)

# Interface: IPass

一个Pass的接口类型。

## Hierarchy

**IPass**

↳  [IPass](_seinjs_.postprocessingsystem.ipass.md)

## Index

### Properties

* [frameOptions](ipass.md#frameoptions)
* [fs](ipass.md#fs)
* [name](ipass.md#name)
* [uniforms](ipass.md#uniforms)

### Methods

* [updateUniforms](ipass.md#updateuniforms)

---

## Properties

<a id="frameoptions"></a>

### `<Optional>` frameOptions

**● frameOptions**: *`IFrameBufferOptions` & `object`*

*Defined in Actor.ts:33*

FrameBuffer的设置，也可以指定`scaleW`和`scaleH`来对每一个Pass的渲染尺寸进行缩放。

___
<a id="fs"></a>

###  fs

**● fs**: *`string`*

*Defined in Actor.ts:29*

片段着色器。默认有上一次处理结果纹理`uniform u_preMap`、原始画面渲染纹理`uniform u_origMap`和UV坐标`varying v_texcoord0`三个变量。

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in Actor.ts:25*

Pass名称，将用于缓存。

___
<a id="uniforms"></a>

### `<Optional>` uniforms

**● uniforms**: *`object`*

*Defined in Actor.ts:37*

要自己添加的`uniforms`。

#### Type declaration

[name: `string`]: `IMaterialUniform`

___

## Methods

<a id="updateuniforms"></a>

### `<Optional>` updateUniforms

▸ **updateUniforms**(uniforms: *`object`*): `void`

*Defined in Actor.ts:41*

每一次渲染的时候都会调用，用于更新`uniforms`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| uniforms | `object` |

**Returns:** `void`

___

