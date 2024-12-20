---
id: "OrthographicCamera"
title: "Class: OrthographicCamera"
sidebar_label: "OrthographicCamera"
sidebar_position: 0
custom_edit_url: null
---

正交相机（在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变）

代码示例：
```ts
const camera = new OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
scene.add(camera);
```

## Hierarchy

- [`Camera`](Camera.md)

  ↳ **`OrthographicCamera`**

## Constructors

### constructor

• **new OrthographicCamera**(`left`, `right`, `top`, `bottom`, `near`, `far`, `zoom?`): [`OrthographicCamera`](OrthographicCamera.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `left` | `any` | `undefined` |
| `right` | `any` | `undefined` |
| `top` | `any` | `undefined` |
| `bottom` | `any` | `undefined` |
| `near` | `any` | `undefined` |
| `far` | `any` | `undefined` |
| `zoom` | `number` | `1` |

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Overrides

[Camera](Camera.md).[constructor](Camera.md#constructor)

#### Defined in

[src/cameras/OrthographicCamera.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/OrthographicCamera.ts#L14)

## Properties

### cameraType

• **cameraType**: [`CameraType`](../types/CameraType.md)

相机类型（默认有两种相机：perspective和orthographic）

#### Inherited from

[Camera](Camera.md).[cameraType](Camera.md#cameratype)

#### Defined in

[src/cameras/Camera.ts:76](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L76)

___

### projectionMatrix

• **projectionMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

投影矩阵

#### Inherited from

[Camera](Camera.md).[projectionMatrix](Camera.md#projectionmatrix)

#### Defined in

[src/cameras/Camera.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L81)

___

### viewMatrix

• **viewMatrix**: [`Matrix4`](Matrix4.md)

视图矩阵

#### Inherited from

[Camera](Camera.md).[viewMatrix](Camera.md#viewmatrix)

#### Defined in

[src/cameras/Camera.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L86)

___

### projectionViewMatrix

• **projectionViewMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

pv矩阵，它是 `projectionMatrix`和`viewMatrix` 的乘积

#### Inherited from

[Camera](Camera.md).[projectionViewMatrix](Camera.md#projectionviewmatrix)

#### Defined in

[src/cameras/Camera.ts:91](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L91)

___

### worldPosition

• **worldPosition**: [`Vector3`](Vector3.md)

世界位置坐标

#### Inherited from

[Camera](Camera.md).[worldPosition](Camera.md#worldposition)

#### Defined in

[src/cameras/Camera.ts:96](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L96)

___

### frustum

• **frustum**: [`Matrix4`](Matrix4.md)

#### Inherited from

[Camera](Camera.md).[frustum](Camera.md#frustum)

#### Defined in

[src/cameras/Camera.ts:128](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L128)

___

### visible

• **visible**: `boolean`

是否可见

#### Inherited from

[Camera](Camera.md).[visible](Camera.md#visible)

#### Defined in

[src/objects/Object3D.ts:14](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L14)

___

### localMatrix

• **localMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

局部变换矩阵

#### Inherited from

[Camera](Camera.md).[localMatrix](Camera.md#localmatrix)

#### Defined in

[src/objects/Object3D.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L19)

___

### worldMatrix

• **worldMatrix**: [`ProjectionMatrix`](ProjectionMatrix.md)

物体的世界变换矩阵 (如果没有父级，那么他和局部变化矩阵相同)

#### Inherited from

[Camera](Camera.md).[worldMatrix](Camera.md#worldmatrix)

#### Defined in

[src/objects/Object3D.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L24)

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算 `worldMatrix` 属性

#### Inherited from

[Camera](Camera.md).[matrixAutoUpdate](Camera.md#matrixautoupdate)

#### Defined in

[src/objects/Object3D.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L29)

___

### position

• **position**: [`Vector3`](Vector3.md)

物体局部位置

#### Inherited from

[Camera](Camera.md).[position](Camera.md#position)

#### Defined in

[src/objects/Object3D.ts:34](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L34)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

物体的局部缩放

#### Inherited from

[Camera](Camera.md).[scale](Camera.md#scale)

#### Defined in

[src/objects/Object3D.ts:39](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L39)

___

### rotation

• **rotation**: [`Euler`](Euler.md)

物体的局部旋转

#### Inherited from

[Camera](Camera.md).[rotation](Camera.md#rotation)

#### Defined in

[src/objects/Object3D.ts:44](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L44)

___

### quaternion

• **quaternion**: [`Quaternion`](Quaternion.md)

物体的局部旋转

#### Inherited from

[Camera](Camera.md).[quaternion](Camera.md#quaternion)

#### Defined in

[src/objects/Object3D.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L49)

___

### up

• **up**: [`Vector3`](Vector3.md)

物体的朝向

#### Inherited from

[Camera](Camera.md).[up](Camera.md#up)

#### Defined in

[src/objects/Object3D.ts:54](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L54)

___

### children

• **children**: [`Object3D`](Object3D.md)[]

对象子级

#### Inherited from

[Camera](Camera.md).[children](Camera.md#children)

#### Defined in

[src/objects/Object3D.ts:59](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L59)

___

### parent

• **parent**: `WithNull`\<[`Object3D`](Object3D.md)\>

对象父级

#### Inherited from

[Camera](Camera.md).[parent](Camera.md#parent)

#### Defined in

[src/objects/Object3D.ts:64](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L64)

___

### worldMatrixNeedsUpdate

• **worldMatrixNeedsUpdate**: `boolean`

当这个属性设置了之后，它将计算在那一帧中的 `worldMatrix`，并将这个值重置为false。默认值为false

#### Inherited from

[Camera](Camera.md).[worldMatrixNeedsUpdate](Camera.md#worldmatrixneedsupdate)

#### Defined in

[src/objects/Object3D.ts:69](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L69)

## Accessors

### near

• `get` **near**(): `number`

获取像机的近端面

#### Returns

`number`

#### Inherited from

Camera.near

#### Defined in

[src/cameras/Camera.ts:172](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L172)

• `set` **near**(`n`): `void`

设置像机的近端面，并更新摄像机投影矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | near |

#### Returns

`void`

#### Inherited from

Camera.near

#### Defined in

[src/cameras/Camera.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L180)

___

### far

• `get` **far**(): `number`

获取像机的远端面

#### Returns

`number`

#### Inherited from

Camera.far

#### Defined in

[src/cameras/Camera.ts:188](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L188)

• `set` **far**(`f`): `void`

设置像机的远端面，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `number` |

#### Returns

`void`

#### Inherited from

Camera.far

#### Defined in

[src/cameras/Camera.ts:196](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L196)

___

### fov

• `get` **fov**(): `number`

获取摄像机视锥体垂直视野角度

#### Returns

`number`

#### Inherited from

Camera.fov

#### Defined in

[src/cameras/Camera.ts:204](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L204)

• `set` **fov**(`f`): `void`

设置摄像机视锥体垂直视野角度，并更新摄像机投影矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | 角度值 |

#### Returns

`void`

#### Inherited from

Camera.fov

#### Defined in

[src/cameras/Camera.ts:212](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L212)

___

### aspect

• `get` **aspect**(): `number`

获取相机视锥体的纵横比

#### Returns

`number`

#### Inherited from

Camera.aspect

#### Defined in

[src/cameras/Camera.ts:220](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L220)

• `set` **aspect**(`aspect`): `void`

设置相机视锥体的纵横比，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `aspect` | `number` |

#### Returns

`void`

#### Inherited from

Camera.aspect

#### Defined in

[src/cameras/Camera.ts:228](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L228)

___

### zoom

• `get` **zoom**(): `number`

获取相机的缩放倍数

#### Returns

`number`

#### Inherited from

Camera.zoom

#### Defined in

[src/cameras/Camera.ts:236](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L236)

• `set` **zoom**(`zoom`): `void`

设置相机的缩放倍数，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |

#### Returns

`void`

#### Inherited from

Camera.zoom

#### Defined in

[src/cameras/Camera.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L244)

___

### bounds

• `get` **bounds**(): `WithUndef`\<[`Bounds`](../types/Bounds.md)\>

获取像机视锥体的范围

#### Returns

`WithUndef`\<[`Bounds`](../types/Bounds.md)\>

#### Inherited from

Camera.bounds

#### Defined in

[src/cameras/Camera.ts:252](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L252)

• `set` **bounds**(`bounds`): `void`

设置相机像机视锥体的范围，并更新摄像机投影矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `WithUndef`\<[`Bounds`](../types/Bounds.md)\> |

#### Returns

`void`

#### Inherited from

Camera.bounds

#### Defined in

[src/cameras/Camera.ts:260](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L260)

## Methods

### perspective

▸ **perspective**(`fov?`, `aspect?`, `near?`, `far?`): `void`

创建或者更新 `projectionMatrix` 透视相机矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `number` |
| `aspect` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[perspective](Camera.md#perspective)

#### Defined in

[src/cameras/Camera.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L272)

___

### orthographic

▸ **orthographic**(`left`, `right`, `top`, `bottom`, `near?`, `far?`, `zoom?`): `void`

创建或者更新 `projectionMatrix` 平面相机矩阵

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `left` | `any` | `undefined` |
| `right` | `any` | `undefined` |
| `top` | `any` | `undefined` |
| `bottom` | `any` | `undefined` |
| `near` | `number` | `undefined` |
| `far` | `number` | `undefined` |
| `zoom` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[orthographic](Camera.md#orthographic)

#### Defined in

[src/cameras/Camera.ts:292](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L292)

___

### lookAt

▸ **lookAt**(`t`): [`OrthographicCamera`](OrthographicCamera.md)

设置相机的朝向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `any` | 朝向位置，是一个三维向量 |

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Inherited from

[Camera](Camera.md).[lookAt](Camera.md#lookat)

#### Defined in

[src/cameras/Camera.ts:317](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L317)

___

### updateMatrixWorld

▸ **updateMatrixWorld**(): [`OrthographicCamera`](OrthographicCamera.md)

用于更新一个对象的世界矩阵。
每个可视对象都有一个叫做 `worldMatrix` 的矩阵，表示这个对象在世界坐标系中的位置和方向。
当您修改对象的位置、旋转或缩放时，对象的 `worldMatrix` 矩阵会发生变化。如果您希望将这些变化反映到场景中，就需要调用 `updateMatrixWorld` 函数。

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Inherited from

[Camera](Camera.md).[updateMatrixWorld](Camera.md#updatematrixworld)

#### Defined in

[src/cameras/Camera.ts:327](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L327)

___

### frustumIntersectsMesh

▸ **frustumIntersectsMesh**(`node`, `worldMatrix?`): `boolean`

判断 mesh 是否在相机视椎体内

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `node` | `any` | `undefined` |
| `worldMatrix` | `any` | `node.worldMatrix` |

#### Returns

`boolean`

#### Inherited from

[Camera](Camera.md).[frustumIntersectsMesh](Camera.md#frustumintersectsmesh)

#### Defined in

[src/cameras/Camera.ts:340](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L340)

___

### project

▸ **project**(`v`): [`OrthographicCamera`](OrthographicCamera.md)

转换到世界坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Inherited from

[Camera](Camera.md).[project](Camera.md#project)

#### Defined in

[src/cameras/Camera.ts:376](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L376)

___

### unproject

▸ **unproject**(`v`): [`OrthographicCamera`](OrthographicCamera.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Inherited from

[Camera](Camera.md).[unproject](Camera.md#unproject)

#### Defined in

[src/cameras/Camera.ts:382](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/Camera.ts#L382)

___

### updateProjectionMatrix

▸ **updateProjectionMatrix**(): `void`

更新投影矩阵

#### Returns

`void`

#### Overrides

[Camera](Camera.md).[updateProjectionMatrix](Camera.md#updateprojectionmatrix)

#### Defined in

[src/cameras/OrthographicCamera.ts:31](https://github.com/sakitam-gis/vis-engine/blob/master/src/cameras/OrthographicCamera.ts#L31)

___

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

[Camera](Camera.md).[add](Camera.md#add)

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

[Camera](Camera.md).[remove](Camera.md#remove)

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

[Camera](Camera.md).[contains](Camera.md#contains)

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

[Camera](Camera.md).[setParent](Camera.md#setparent)

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

[Camera](Camera.md).[traverse](Camera.md#traverse)

#### Defined in

[src/objects/Object3D.ts:147](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L147)

___

### updateMatrix

▸ **updateMatrix**(): `void`

更新局部变换矩阵

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[updateMatrix](Camera.md#updatematrix)

#### Defined in

[src/objects/Object3D.ts:200](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L200)

___

### decompose

▸ **decompose**(): `void`

从局部矩阵计算位置，旋转和缩放

#### Returns

`void`

#### Inherited from

[Camera](Camera.md).[decompose](Camera.md#decompose)

#### Defined in

[src/objects/Object3D.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L208)

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

克隆此渲染对象

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Camera](Camera.md).[clone](Camera.md#clone)

#### Defined in

[src/objects/Object3D.ts:218](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L218)

___

### copy

▸ **copy**(`object`, `recursive?`): [`OrthographicCamera`](OrthographicCamera.md)

复制给定的对象到这个对象中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object3D`](Object3D.md) | 渲染对象 |
| `recursive?` | `boolean` | 设置是否复制子对象 |

#### Returns

[`OrthographicCamera`](OrthographicCamera.md)

#### Inherited from

[Camera](Camera.md).[copy](Camera.md#copy)

#### Defined in

[src/objects/Object3D.ts:227](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Object3D.ts#L227)
