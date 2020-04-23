[seinjs-post-processing-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [PostProcessingSystem](../modules/_seinjs_.postprocessingsystem.md) > [Actor](../classes/_seinjs_.postprocessingsystem.actor.md)

# Class: Actor

## Type parameters
#### IOptionTypes :  `Object`
#### TRootComponent :  `Component`
## Hierarchy

↳  [Actor](actor.md)<`IOptionTypes`>

**↳ Actor**

## Index

### Constructors

* [constructor](_seinjs_.postprocessingsystem.actor.md#constructor)

### Properties

* [className](_seinjs_.postprocessingsystem.actor.md#classname)
* [classType](_seinjs_.postprocessingsystem.actor.md#classtype)
* [emitComponentsDestroy](_seinjs_.postprocessingsystem.actor.md#emitcomponentsdestroy)
* [event](_seinjs_.postprocessingsystem.actor.md#event)
* [isActor](_seinjs_.postprocessingsystem.actor.md#isactor)
* [isInfoActor](_seinjs_.postprocessingsystem.actor.md#isinfoactor)
* [isPostProcessingSystemActor](_seinjs_.postprocessingsystem.actor.md#ispostprocessingsystemactor)
* [isRenderSystemActor](_seinjs_.postprocessingsystem.actor.md#isrendersystemactor)
* [isSObject](_seinjs_.postprocessingsystem.actor.md#issobject)
* [isSystemActor](_seinjs_.postprocessingsystem.actor.md#issystemactor)
* [linked](_seinjs_.postprocessingsystem.actor.md#linked)
* [name](_seinjs_.postprocessingsystem.actor.md#name)
* [parent](_seinjs_.postprocessingsystem.actor.md#parent)
* [root](_seinjs_.postprocessingsystem.actor.md#root)
* [tag](_seinjs_.postprocessingsystem.actor.md#tag)
* [updateOnEverTick](_seinjs_.postprocessingsystem.actor.md#updateonevertick)
* [updatePriority](_seinjs_.postprocessingsystem.actor.md#updatepriority)
* [uuid](_seinjs_.postprocessingsystem.actor.md#uuid)
* [CLASS_NAME](_seinjs_.postprocessingsystem.actor.md#class_name)
* [CLASS_TYPE](_seinjs_.postprocessingsystem.actor.md#class_type)
* [UPDATE_PRIORITY](_seinjs_.postprocessingsystem.actor.md#update_priority)

### Methods

* [addChild](_seinjs_.postprocessingsystem.actor.md#addchild)
* [addComponent](_seinjs_.postprocessingsystem.actor.md#addcomponent)
* [addPass](_seinjs_.postprocessingsystem.actor.md#addpass)
* [addPasses](_seinjs_.postprocessingsystem.actor.md#addpasses)
* [clearPasses](_seinjs_.postprocessingsystem.actor.md#clearpasses)
* [clone](_seinjs_.postprocessingsystem.actor.md#clone)
* [deserialize](_seinjs_.postprocessingsystem.actor.md#deserialize)
* [findComponentByClass](_seinjs_.postprocessingsystem.actor.md#findcomponentbyclass)
* [findComponentByName](_seinjs_.postprocessingsystem.actor.md#findcomponentbyname)
* [findComponentsByClass](_seinjs_.postprocessingsystem.actor.md#findcomponentsbyclass)
* [getGame](_seinjs_.postprocessingsystem.actor.md#getgame)
* [getLevel](_seinjs_.postprocessingsystem.actor.md#getlevel)
* [getPhysicWorld](_seinjs_.postprocessingsystem.actor.md#getphysicworld)
* [getWorld](_seinjs_.postprocessingsystem.actor.md#getworld)
* [onAdd](_seinjs_.postprocessingsystem.actor.md#onadd)
* [onCreateRoot](_seinjs_.postprocessingsystem.actor.md#oncreateroot)
* [onDestroy](_seinjs_.postprocessingsystem.actor.md#ondestroy)
* [onError](_seinjs_.postprocessingsystem.actor.md#onerror)
* [onInit](_seinjs_.postprocessingsystem.actor.md#oninit)
* [onPostClear](_seinjs_.postprocessingsystem.actor.md#onpostclear)
* [onPostRender](_seinjs_.postprocessingsystem.actor.md#onpostrender)
* [onPreRender](_seinjs_.postprocessingsystem.actor.md#onprerender)
* [onReLink](_seinjs_.postprocessingsystem.actor.md#onrelink)
* [onUnLink](_seinjs_.postprocessingsystem.actor.md#onunlink)
* [onUpdate](_seinjs_.postprocessingsystem.actor.md#onupdate)
* [reLink](_seinjs_.postprocessingsystem.actor.md#relink)
* [removeChild](_seinjs_.postprocessingsystem.actor.md#removechild)
* [removeComponent](_seinjs_.postprocessingsystem.actor.md#removecomponent)
* [removeFromParent](_seinjs_.postprocessingsystem.actor.md#removefromparent)
* [removePass](_seinjs_.postprocessingsystem.actor.md#removepass)
* [rename](_seinjs_.postprocessingsystem.actor.md#rename)
* [serialize](_seinjs_.postprocessingsystem.actor.md#serialize)
* [unLink](_seinjs_.postprocessingsystem.actor.md#unlink)
* [verifyAdding](_seinjs_.postprocessingsystem.actor.md#verifyadding)
* [verifyRemoving](_seinjs_.postprocessingsystem.actor.md#verifyremoving)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Actor**(name: *`string`*, game: *`Game`*, initOptions?: *`IOptionTypes`*): [Actor](_seinjs_.postprocessingsystem.actor.md)

*Inherited from Actor.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1114*

构造Actor，**不可自行构造！！！**请参见`game.addActor`或`world.addActor`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| game | `Game` |
| `Optional` initOptions | `IOptionTypes` |

**Returns:** [Actor](_seinjs_.postprocessingsystem.actor.md)

___

## Properties

<a id="classname"></a>

###  className

**● className**: *`SName`*

*Inherited from SObject.className*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1015*

实例的类名，代理到类的静态属性`CLASS_NAME`。

___
<a id="classtype"></a>

###  classType

**● classType**: *`SName`*

*Inherited from SObject.classType*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1020*

实例的类型，代理到类的静态属性`CLASS_NAME`。 预留，暂时没啥用。

___
<a id="emitcomponentsdestroy"></a>

###  emitComponentsDestroy

**● emitComponentsDestroy**: *`boolean`*

*Inherited from Actor.emitComponentsDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1101*

在Actor自身销毁时，是否同时需要触发其下挂载的所有Component的销毁，也就是`onDestroy`生命周期的调用。 用于性能优化。

___
<a id="event"></a>

###  event

**● event**: *`TRootComponent["event"]`*

*Inherited from Actor.event*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1130*

Actor自身范围内的事件系统管理器，将会直接代理到其的根组件`root`。

___
<a id="isactor"></a>

###  isActor

**● isActor**: *`boolean`*

*Inherited from Actor.isActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1087*

___
<a id="isinfoactor"></a>

###  isInfoActor

**● isInfoActor**: *`boolean`*

*Inherited from InfoActor.isInfoActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:9581*

___
<a id="ispostprocessingsystemactor"></a>

###  isPostProcessingSystemActor

**● isPostProcessingSystemActor**: *`boolean`* = true

*Inherited from [Actor](actor.md).[isPostProcessingSystemActor](actor.md#ispostprocessingsystemactor)*

*Defined in Actor.ts:67*

___
<a id="isrendersystemactor"></a>

###  isRenderSystemActor

**● isRenderSystemActor**: *`boolean`*

*Inherited from RenderSystemActor.isRenderSystemActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:5070*

___
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:996*

一个实例是否为SObject的判据。

___
<a id="issystemactor"></a>

###  isSystemActor

**● isSystemActor**: *`boolean`*

*Inherited from SystemActor.isSystemActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:2710*

___
<a id="linked"></a>

###  linked

**● linked**: *`boolean`*

*Inherited from Actor.linked*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1126*

Actor是否被连接到了舞台上。

___
<a id="name"></a>

###  name

**● name**: *`SName`*

*Inherited from SObject.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1000*

实例的名字。

___
<a id="parent"></a>

###  parent

**● parent**: *`Game`<`StateActor`<`__type`>> \| `Level`<`StateActor`<`__type`>> \| `World`<`StateActor`<`__type`>> \| `ChildActorComponent`<`Actor`<`__type`, `Component`<`any`>>>*

*Inherited from Actor.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1122*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="root"></a>

###  root

**● root**: *`TRootComponent`*

*Inherited from Actor.root*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1134*

Actor自身的根组件。一般来讲创建后就不会变更。

___
<a id="tag"></a>

###  tag

**● tag**: *`SName`*

*Inherited from Actor.tag*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1105*

用于给Actor归类的标签，可以用于后续的快速索引。

___
<a id="updateonevertick"></a>

###  updateOnEverTick

**● updateOnEverTick**: *`boolean`*

*Inherited from Actor.updateOnEverTick*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1096*

Actor是否需要在每一帧进行进行`update`调用，如果为`false`，则将不会触发`onUpdate`生命周期（包括挂载在其下的所有Component）。 用于性能优化。

___
<a id="updatepriority"></a>

###  updatePriority

**● updatePriority**: *`number`*

*Inherited from SystemActor.updatePriority*

*Overrides InfoActor.updatePriority*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:2711*

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`number`*

*Inherited from SObject.uuid*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1011*

所有继承自`SObject`的类的实例的唯一ID。

___
<a id="class_name"></a>

### `<Static>` CLASS_NAME

**● CLASS_NAME**: *`SName`*

*Inherited from SObject.CLASS_NAME*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:986*

实例的类名，用于反射，在类被实例化后有`object.className`作为代理。

___
<a id="class_type"></a>

### `<Static>` CLASS_TYPE

**● CLASS_TYPE**: *`SName`*

*Inherited from SObject.CLASS_TYPE*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:991*

实例的类型用于反射，在类被实例化后有`object.classType`作为代理。 预留，暂时没用。

___
<a id="update_priority"></a>

### `<Static>` UPDATE_PRIORITY

**● UPDATE_PRIORITY**: *`object`*

*Inherited from InfoActor.UPDATE_PRIORITY*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:9574*

默认的更新优先级。

*__member__*: System 约定占用1000 ~ 2000

*__member__*: GameMode 约定占用2000 ~ 3000

*__member__*: LevelScript 约定占用3000 ~ 4000

*__member__*: State 约定占用4000 ~ 5000

*__member__*: Others 其他，默认直接追加到最后

#### Type declaration

 GameMode: `number`

 LevelScript: `number`

 Others: `number`

 State: `number`

 System: `number`

___

## Methods

<a id="addchild"></a>

###  addChild

▸ **addChild**(actor: *`Actor`*): `void`

*Inherited from Actor.addChild*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1265*

将一个Actor作为自身的子级，注意子级Actor将仍然存在于`game`或者`world`中，并拥有自身独立的生命周期，这里只是建立了一个连接关系。 如果父子为`SceneActor`，那么这层链接关系还会反映到渲染层。

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | `Actor` |

**Returns:** `void`

___
<a id="addcomponent"></a>

###  addComponent

▸ **addComponent**<`IComponent`>(name: *`string`*, ComponentClass: *`TConstructor`<`IComponent`>*, initState?: *`IComponent["STATE_TYPE"]`*, parent?: *`SceneComponent`*): `IComponent`

*Inherited from Actor.addComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1252*

根据指定的`ComponentClass`和其初始化参数`initState`来添加一个Component。**注意这里要求每个Component的名字`name`是唯一的**。 如果是在`world`中添加一个`SceneComponent`，你可以指定一个`parent`作为要添加的Component的父级，让它们在渲染层连接起来。

**Type parameters:**

#### IComponent :  `Component`<`any`>
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| ComponentClass | `TConstructor`<`IComponent`> |
| `Optional` initState | `IComponent["STATE_TYPE"]` |
| `Optional` parent | `SceneComponent` |

**Returns:** `IComponent`

___
<a id="addpass"></a>

###  addPass

▸ **addPass**(pass: *[IPass](../interfaces/ipass.md)*): `void`

*Inherited from [Actor](actor.md).[addPass](actor.md#addpass)*

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

*Inherited from [Actor](actor.md).[addPasses](actor.md#addpasses)*

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

*Inherited from [Actor](actor.md).[clearPasses](actor.md#clearpasses)*

*Defined in Actor.ts:270*

清楚所有Pass。

**Returns:** `void`

___
<a id="clone"></a>

###  clone

▸ **clone**(object: *`this`*): `this`

*Inherited from SObject.clone*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1028*

克隆一个实例，交由子类实现。

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `this` |

**Returns:** `this`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(json: *`any`*): `void`

*Inherited from SObject.deserialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1040*

从一个json序列反序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `void`

___
<a id="findcomponentbyclass"></a>

###  findComponentByClass

▸ **findComponentByClass**<`TComponent`>(ComponentClass: *`TConstructor`<`TComponent`>*): `TComponent`

*Inherited from Actor.findComponentByClass*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1279*

根据某个类查找一个Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| ComponentClass | `TConstructor`<`TComponent`> |

**Returns:** `TComponent`

___
<a id="findcomponentbyname"></a>

###  findComponentByName

▸ **findComponentByName**<`TComponent`>(name: *`string`*): `TComponent`

*Inherited from Actor.findComponentByName*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1275*

根据名字查找一个Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `TComponent`

___
<a id="findcomponentsbyclass"></a>

###  findComponentsByClass

▸ **findComponentsByClass**<`TComponent`>(ComponentClass: *`TConstructor`<`TComponent`>*): `TComponent`[]

*Inherited from Actor.findComponentsByClass*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1283*

查找某个类的所有实例Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| ComponentClass | `TConstructor`<`TComponent`> |

**Returns:** `TComponent`[]

___
<a id="getgame"></a>

###  getGame

▸ **getGame**<`IGameState`>(): `Game`<`IGameState`>

*Inherited from Actor.getGame*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1226*

获取当前`Game`实例。

*__template__*: IGameState 当前游戏状态管理器的类型。

**Type parameters:**

#### IGameState :  `StateActor`

**Returns:** `Game`<`IGameState`>

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**<`ILevelState`>(): `Level`<`ILevelState`>

*Inherited from Actor.getLevel*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1238*

获取当前`Level`实例。

*__template__*: ILevelState 当前关卡状态管理器的类型。

**Type parameters:**

#### ILevelState :  `StateActor`

**Returns:** `Level`<`ILevelState`>

___
<a id="getphysicworld"></a>

###  getPhysicWorld

▸ **getPhysicWorld**(): `IPhysicWorld`

*Inherited from Actor.getPhysicWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1243*

仅在初始化了物理引擎之后，用于获取当前物理世界`PhysicWorld`实例。 如何使用物理引擎请见**Guide**和**Demo**。

**Returns:** `IPhysicWorld`

___
<a id="getworld"></a>

###  getWorld

▸ **getWorld**<`IWorldState`>(): `World`<`IWorldState`>

*Inherited from Actor.getWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1232*

获取当前`World`实例。

*__template__*: IWorldState 当前世界状态管理器的类型。

**Type parameters:**

#### IWorldState :  `StateActor`

**Returns:** `World`<`IWorldState`>

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initOptions: *`IOptionTypes`*): `void`

*Inherited from Actor.onAdd*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1159*

生命周期，将在Actor被正式加入到游戏中之后被调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | `IOptionTypes` |

**Returns:** `void`

___
<a id="oncreateroot"></a>

###  onCreateRoot

▸ **onCreateRoot**(initOptions: *`IOptionTypes`*): `TRootComponent`

*Inherited from Actor.onCreateRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1151*

生命周期，将在Actor被创建时最先调用，用于创建从属于该Actor的根组件。 在原生Actor中均有默认值，你可以用此周期来定义你自己的Actor。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | `IOptionTypes` |

**Returns:** `TRootComponent`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from RenderSystemActor.onDestroy*

*Overrides Actor.onDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:5102*

销毁逻辑，继承请先调用`super.onDestroy`。

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details?: *`any`*): `boolean` \| `void`

*Inherited from Actor.onError*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1169*

生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `BaseException` |
| `Optional` details | `any` |

**Returns:** `boolean` \| `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *`IOptionTypes`*): `void`

*Inherited from [Actor](actor.md).[onInit](actor.md#oninit)*

*Overrides RenderSystemActor.onInit*

*Defined in Actor.ts:91*

初始化，继承请先调用`super.onInit`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IOptionTypes` |

**Returns:** `void`

___
<a id="onpostclear"></a>

###  onPostClear

▸ **onPostClear**(initOptions: *`IOptionTypes`*): `void`

*Inherited from RenderSystemActor.onPostClear*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:5093*

在整个画面被`Clear`后触发。 如果想默认渲染到`Renderer`内置的`Frame`或者插入一些类似于手机相机的画面等，可以在这里完成。 **注意不要在这里修改任何图层！也不要在这里切换主相机！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | `IOptionTypes` |

**Returns:** `void`

___
<a id="onpostrender"></a>

###  onPostRender

▸ **onPostRender**(initState: *`IOptionTypes`*): `void`

*Inherited from [Actor](actor.md).[onPostRender](actor.md#onpostrender)*

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

*Inherited from [Actor](actor.md).[onPreRender](actor.md#onprerender)*

*Overrides RenderSystemActor.onPreRender*

*Defined in Actor.ts:102*

渲染之前，继承请先调用`super.onPreRender`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IOptionTypes` |

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(): `void`

*Inherited from RenderSystemActor.onReLink*

*Overrides Actor.onReLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:5082*

取消链接，将会让功能恢复，继承请先调用`super.onReLink`。

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from RenderSystemActor.onUnLink*

*Overrides Actor.onUnLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:5078*

取消链接，将会暂时让功能失效，继承请先调用`super.onUnLink`。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Inherited from Actor.onUpdate*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1163*

生命周期，将在Actor被正式加入到游戏中之后，并且`updateOnEverTick`为`true`时在每一帧被调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| delta | `number` |

**Returns:** `void`

___
<a id="relink"></a>

###  reLink

▸ **reLink**(parent?: *`Actor` \| `World` \| `Game`*): `this`

*Inherited from Actor.reLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1214*

将一个已经使用`unLink`方法和游戏世界断开连接的`actor`恢复连接，将其重新加入世界中。 这一般用于性能优化，比如对象池的创建。

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` parent | `Actor` \| `World` \| `Game` |  指定要恢复连接到的父级，不指定则使用上一次的父级。 |

**Returns:** `this`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(actor: *`Actor`*): `void`

*Inherited from Actor.removeChild*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1270*

解除自身和一个子级Actor的链接。注意此方法也会直接将子级Actor从游戏中销毁！ 如果只是想要改变一个SceneActor的归属，请使用`SceneActor`下的`changeParent`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | `Actor` |

**Returns:** `void`

___
<a id="removecomponent"></a>

###  removeComponent

▸ **removeComponent**(name: *`string`*): `void`

▸ **removeComponent**(component: *`Component`*): `void`

*Inherited from Actor.removeComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1256*

通过名字移除一个Component。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

*Inherited from Actor.removeComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1260*

移除一个指定的Component。

**Parameters:**

| Name | Type |
| ------ | ------ |
| component | `Component` |

**Returns:** `void`

___
<a id="removefromparent"></a>

###  removeFromParent

▸ **removeFromParent**(): `void`

*Inherited from Actor.removeFromParent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1247*

将自己从父级移除，基本等同于`destroy`方法，从游戏中销毁自身。

**Returns:** `void`

___
<a id="removepass"></a>

###  removePass

▸ **removePass**(index: *`number`*): `void`

*Inherited from [Actor](actor.md).[removePass](actor.md#removepass)*

*Defined in Actor.ts:259*

移除一个指定索引的Pass。

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `void`

___
<a id="rename"></a>

###  rename

▸ **rename**(name: *`string`*): `void`

*Inherited from SObject.rename*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1024*

通过字符串修改实例名字。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `any`

*Inherited from SObject.serialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1034*

实例序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Returns:** `any`

___
<a id="unlink"></a>

###  unLink

▸ **unLink**(): `this`

*Inherited from Actor.unLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1207*

将一个已经创建的`actor`从游戏世界中移除，但仍然保留其状态。之后可以用`reLink`方法让其重新和游戏世界建立连接。 注意如果有子级`actor`，并不会自动`unLink`！ 这一般用于性能优化，比如对象池的创建。

**Returns:** `this`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Inherited from [Actor](actor.md).[verifyAdding](actor.md#verifyadding)*

*Overrides Actor.verifyAdding*

*Defined in Actor.ts:76*

验证是否在添加多个后处理系统。

**Returns:** `void`

___
<a id="verifyremoving"></a>

###  verifyRemoving

▸ **verifyRemoving**(): `void`

*Inherited from Actor.verifyRemoving*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1146*

用于验证该Actor在当前状态是否可被移除。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Returns:** `void`

___

