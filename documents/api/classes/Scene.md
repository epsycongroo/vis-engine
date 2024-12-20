# Class: Scene

场景对象，一般我们会将创建的网格渲染对象添加到场景中进行渲染

代码示例：
```ts
const scene = new Scene();

const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });

points.position.set(-1, 1, 0);

scene.add(points);
```

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Scene`**

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [visible](Scene.md#visible)
- [localMatrix](Scene.md#localmatrix)
- [worldMatrix](Scene.md#worldmatrix)
- [matrixAutoUpdate](Scene.md#matrixautoupdate)
- [position](Scene.md#position)
- [scale](Scene.md#scale)
- [rotation](Scene.md#rotation)
- [quaternion](Scene.md#quaternion)
- [up](Scene.md#up)
- [children](Scene.md#children)
- [parent](Scene.md#parent)
- [worldMatrixNeedsUpdate](Scene.md#worldmatrixneedsupdate)

### Methods

- [add](Scene.md#add)
- [remove](Scene.md#remove)
- [contains](Scene.md#contains)
- [setParent](Scene.md#setparent)
- [traverse](Scene.md#traverse)
- [lookAt](Scene.md#lookat)
- [updateMatrixWorld](Scene.md#updatematrixworld)
- [updateMatrix](Scene.md#updatematrix)
- [decompose](Scene.md#decompose)
- [clone](Scene.md#clone)
- [copy](Scene.md#copy)

## Constructors

### constructor

• **new Scene**(): [`Scene`](Scene.md)

#### Returns

[`Scene`](Scene.md)

#### Inherited from

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

[src/objects/Object3D.ts:71](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L71)

## Properties

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Object3D](Object3D.md).[visible](Object3D.md#visible)

#### Defined in

[src/objects/Object3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L14)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Object3D](Object3D.md).[localMatrix](Object3D.md#localmatrix)

#### Defined in

[src/objects/Object3D.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L19)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵 (如果没有父级，那么他和局部变化矩阵相同)

#### Inherited from

[Object3D](Object3D.md).[worldMatrix](Object3D.md#worldmatrix)

#### Defined in

[src/objects/Object3D.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L24)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算 `worldMatrix` 属性

#### Inherited from

[Object3D](Object3D.md).[matrixAutoUpdate](Object3D.md#matrixautoupdate)

#### Defined in

[src/objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L29)

___

### position

• **position**: [`Vector3`](Vector3.md)

物体局部位置

#### Inherited from

[Object3D](Object3D.md).[position](Object3D.md#position)

#### Defined in

[src/objects/Object3D.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L34)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

物体的局部缩放

#### Inherited from

[Object3D](Object3D.md).[scale](Object3D.md#scale)

#### Defined in

[src/objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L39)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[rotation](Object3D.md#rotation)

#### Defined in

[src/objects/Object3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L44)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

物体的局部旋转

#### Inherited from

[Object3D](Object3D.md).[quaternion](Object3D.md#quaternion)

#### Defined in

[src/objects/Object3D.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L49)

___

### up

• **up**: [`Vector3`](Vector3.md)

物体的朝向

#### Inherited from

[Object3D](Object3D.md).[up](Object3D.md#up)

#### Defined in

[src/objects/Object3D.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L54)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

对象子级

#### Inherited from

[Object3D](Object3D.md).[children](Object3D.md#children)

#### Defined in

[src/objects/Object3D.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L59)

___

### parent

• **parent**: `WithNull`\<[`Object3D`](Object3D.md)\>

对象父级

#### Inherited from

[Object3D](Object3D.md).[parent](Object3D.md#parent)

#### Defined in

[src/objects/Object3D.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L64)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

当这个属性设置了之后，它将计算在那一帧中的 `worldMatrix`，并将这个值重置为false。默认值为false

#### Inherited from

[Object3D](Object3D.md).[worldMatrixNeedsUpdate](Object3D.md#worldmatrixneedsupdate)

#### Defined in

[src/objects/Object3D.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L69)

## Methods

### add

▸ **add**(`object`, `notifyChild?`): `void`

添加对象到这个对象的子级

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[add](Object3D.md#add)

#### Defined in

[src/objects/Object3D.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L97)

___

### remove

▸ **remove**(`object`, `notifyChild?`): `void`

从此对象移除传入的对象（如果存在）

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | `undefined` |
| `notifyChild` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[remove](Object3D.md#remove)

#### Defined in

[src/objects/Object3D.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L111)

___

### contains

▸ **contains**(`object`): `boolean`

判断此渲染对象的子集是否包含传入的渲染对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object3D`](Object3D.md) |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[contains](Object3D.md#contains)

#### Defined in

[src/objects/Object3D.ts:124](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L124)

___

### setParent

▸ **setParent**(`object`, `notifyParent?`): `void`

设置此渲染对象的父集

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `any` | `undefined` | 渲染对象 |
| `notifyParent` | `boolean` | `true` | 设置是否将此渲染对象添加到传入的渲染对象中 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[setParent](Object3D.md#setparent)

#### Defined in

[src/objects/Object3D.ts:133](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L133)

___

### traverse

▸ **traverse**(`callback`): `void`

遍历此对象（包含子对象）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `any` | 回调函数 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

[src/objects/Object3D.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L147)

___

### lookAt

▸ **lookAt**(`eye`, `invert?`): `void`

旋转物体使其在世界空间中面朝一个点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | [`Vector3`](Vector3.md) | 朝向位置 |
| `invert?` | `boolean` | 是否反转 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[lookAt](Object3D.md#lookat)

#### Defined in

[src/objects/Object3D.ts:160](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L160)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(`force?`): `void`

更新渲染对象的世界矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | 是否更新次渲染对象的子集 |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrixWorld](Object3D.md#updatematrixworld)

#### Defined in

[src/objects/Object3D.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L174)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[updateMatrix](Object3D.md#updatematrix)

#### Defined in

[src/objects/Object3D.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L200)

___

### decompose

▸ **decompose**(): `void`

从局部矩阵计算位置，旋转和缩放

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[decompose](Object3D.md#decompose)

#### Defined in

[src/objects/Object3D.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L208)

___

### clone

▸ **clone**(): [`Scene`](Scene.md)

克隆场景对象

#### Returns

[`Scene`](Scene.md)

#### Overrides

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

[src/objects/Scene.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Scene.ts#L21)

___

### copy

▸ **copy**(`source`, `recursive`): [`Scene`](Scene.md)

将传入的场景对象的各属性复制到此场景实例中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | 源场景 |
| `recursive` | `any` | 设置是否复制子对象 |

#### Returns

[`Scene`](Scene.md)

#### Overrides

[Object3D](Object3D.md).[copy](Object3D.md#copy)

#### Defined in

[src/objects/Scene.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Scene.ts#L30)
