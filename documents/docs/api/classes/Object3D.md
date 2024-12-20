---
id: "Object3D"
title: "Class: Object3D"
sidebar_label: "Object3D"
sidebar_position: 0
custom_edit_url: null
---

三维物体，是大部分对象的基类，提供了一系列的属性和方法来对三维空间中的物体进行操作

## Hierarchy

- **`Object3D`**

  ↳ [`Camera`](Camera.md)

  ↳ [`Mesh`](Mesh.md)

  ↳ [`Scene`](Scene.md)

## Constructors

### constructor

• **new Object3D**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/objects/Object3D.ts:71](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L71)

## Properties

### visible

• **visible**: `boolean`

是否可见

#### Defined in

[src/objects/Object3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L14)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Defined in

[src/objects/Object3D.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L19)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵 (如果没有父级，那么他和局部变化矩阵相同)

#### Defined in

[src/objects/Object3D.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L24)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算 `worldMatrix` 属性

#### Defined in

[src/objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L29)

___

### position

• **position**: [`Vector3`](Vector3.md)

物体局部位置

#### Defined in

[src/objects/Object3D.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L34)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

物体的局部缩放

#### Defined in

[src/objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L39)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

物体的局部旋转

#### Defined in

[src/objects/Object3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L44)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

物体的局部旋转

#### Defined in

[src/objects/Object3D.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L49)

___

### up

• **up**: [`Vector3`](Vector3.md)

物体的朝向

#### Defined in

[src/objects/Object3D.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L54)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

对象子级

#### Defined in

[src/objects/Object3D.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L59)

___

### parent

• **parent**: `WithNull`\<[`Object3D`](Object3D.md)\>

对象父级

#### Defined in

[src/objects/Object3D.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L64)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

当这个属性设置了之后，它将计算在那一帧中的 `worldMatrix`，并将这个值重置为false。默认值为false

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

#### Defined in

[src/objects/Object3D.ts:174](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L174)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Defined in

[src/objects/Object3D.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L200)

___

### decompose

▸ **decompose**(): `void`

从局部矩阵计算位置，旋转和缩放

#### Returns

`void`

#### Defined in

[src/objects/Object3D.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L208)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

克隆此渲染对象

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/objects/Object3D.ts:218](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L218)

___

### copy

▸ **copy**(`object`, `recursive?`): [`Object3D`](Object3D.md)

复制给定的对象到这个对象中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | 渲染对象 |
| `recursive?` | `boolean` | 设置是否复制子对象 |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/objects/Object3D.ts:227](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L227)
