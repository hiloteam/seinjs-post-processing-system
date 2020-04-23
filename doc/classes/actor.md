[seinjs-post-processing-system](../README.md) > [Actor](../classes/actor.md)

# Class: Actor

DomHUD.Component的一个容器封装，但添加了一些特别的功能使其可以追踪其他Actor。

*__template__*: IStateTypes 可进行初始化参数扩展。

*__template__*: IEvents 可扩展事件类型。

## Type parameters
#### IOptionTypes :  `Object`
#### TRootComponent :  `Component`
## Hierarchy

 `RenderSystemActor`<`IOptionTypes`>

**↳ Actor**

↳  [Actor](_seinjs_.postprocessingsystem.actor.md)

## Index

### Properties

* [isPostProcessingSystemActor](actor.md#ispostprocessingsystemactor)

### Methods

* [addPass](actor.md#addpass)
* [addPasses](actor.md#addpasses)
* [clearPasses](actor.md#clearpasses)
* [onInit](actor.md#oninit)
* [onPostRender](actor.md#onpostrender)
* [onPreRender](actor.md#onprerender)
* [removePass](actor.md#removepass)
* [verifyAdding](actor.md#verifyadding)

---

## Properties

<a id="ispostprocessingsystemactor"></a>

###  isPostProcessingSystemActor

**● isPostProcessingSystemActor**: *`boolean`* = true

*Defined in Actor.ts:67*

___

## Methods

<a id="addpass"></a>

###  addPass

▸ **addPass**(pass: *[IPass](../interfaces/ipass.md)*): `void`

*Defined in Actor.ts:238*

添加一个Pass。

**Parameters:**

| Name | Type |
| ------ | ------ |
| pass | [IPass](../interfaces/ipass.md) |

**Returns:** `void`

___
<a id="addpasses"></a>

###  addPasses

▸ **addPasses**(passes: *[IPass](../interfaces/ipass.md)[]*): `void`

*Defined in Actor.ts:250*

批量添加Pass。

**Parameters:**

| Name | Type |
| ------ | ------ |
| passes | [IPass](../interfaces/ipass.md)[] |

**Returns:** `void`

___
<a id="clearpasses"></a>

###  clearPasses

▸ **clearPasses**(): `void`

*Defined in Actor.ts:270*

清楚所有Pass。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *`IOptionTypes`*): `void`

*Overrides RenderSystemActor.onInit*

*Defined in Actor.ts:91*

初始化，继承请先调用`super.onInit`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IOptionTypes` |

**Returns:** `void`

___
<a id="onpostrender"></a>

###  onPostRender

▸ **onPostRender**(initState: *`IOptionTypes`*): `void`

*Overrides RenderSystemActor.onPostRender*

*Defined in Actor.ts:111*

渲染之后，后处理的主要逻辑，继承请先调用`super.onPostRender`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IOptionTypes` |

**Returns:** `void`

___
<a id="onprerender"></a>

###  onPreRender

▸ **onPreRender**(initState: *`IOptionTypes`*): `void`

*Overrides RenderSystemActor.onPreRender*

*Defined in Actor.ts:102*

渲染之前，继承请先调用`super.onPreRender`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IOptionTypes` |

**Returns:** `void`

___
<a id="removepass"></a>

###  removePass

▸ **removePass**(index: *`number`*): `void`

*Defined in Actor.ts:259*

移除一个指定索引的Pass。

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Overrides Actor.verifyAdding*

*Defined in Actor.ts:76*

验证是否在添加多个后处理系统。

**Returns:** `void`

___

