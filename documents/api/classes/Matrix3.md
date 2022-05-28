[vis-engine - v1.0.0](../index.md) / Matrix3

# Class: Matrix3

一个表示 3*3 的矩阵
```bash
1--0--0
|  |  |
0--1--0
|  |  |
0--0--1
```

示例：
```ts
const m = new Matrix3();
```

## Hierarchy

- `default`

  ↳ **`Matrix3`**

## Table of contents

### Constructors

- [constructor](Matrix3.md#constructor)

### Accessors

- [elements](Matrix3.md#elements)
- [x](Matrix3.md#x)
- [y](Matrix3.md#y)
- [z](Matrix3.md#z)
- [identity](Matrix3.md#identity)

### Methods

- [add](Matrix3.md#add)
- [adjoint](Matrix3.md#adjoint)
- [clone](Matrix3.md#clone)
- [copy](Matrix3.md#copy)
- [determinant](Matrix3.md#determinant)
- [equals](Matrix3.md#equals)
- [frob](Matrix3.md#frob)
- [fromArray](Matrix3.md#fromarray)
- [fromMat4](Matrix3.md#frommat4)
- [fromQuat](Matrix3.md#fromquat)
- [fromRotation](Matrix3.md#fromrotation)
- [fromRotationTranslationScale](Matrix3.md#fromrotationtranslationscale)
- [fromScaling](Matrix3.md#fromscaling)
- [fromTranslation](Matrix3.md#fromtranslation)
- [getNormalMatrix](Matrix3.md#getnormalmatrix)
- [invert](Matrix3.md#invert)
- [multiply](Matrix3.md#multiply)
- [normalFromMat4](Matrix3.md#normalfrommat4)
- [premultiply](Matrix3.md#premultiply)
- [rotate](Matrix3.md#rotate)
- [scale](Matrix3.md#scale)
- [set](Matrix3.md#set)
- [subtract](Matrix3.md#subtract)
- [toArray](Matrix3.md#toarray)
- [toString](Matrix3.md#tostring)
- [translate](Matrix3.md#translate)
- [transpose](Matrix3.md#transpose)

## Constructors

### constructor

• **new Matrix3**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m00` | `number` | `1` | 第一行第一列，默认是 1 |
| `m01` | `number` | `0` | 第一行第二列，默认是 0 |
| `m02` | `number` | `0` | 第一行第三列，默认是 0 |
| `m10` | `number` | `0` | 第二行第一列，默认是 0 |
| `m11` | `number` | `1` | 第二行第二列，默认是 1 |
| `m12` | `number` | `0` | 第二行第三列，默认是 0 |
| `m20` | `number` | `0` | 第三行第一列，默认是 0 |
| `m21` | `number` | `0` | 第三行第二列，默认是 0 |
| `m22` | `number` | `1` | 第三行第三列，默认是 1 |

#### Overrides

Matrix.constructor

#### Defined in

[math/Matrix3.ts:60](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;60)

## Accessors

### elements

• `get` **elements**(): `Float32Array`

#### Returns

`Float32Array`

#### Inherited from

Matrix.elements

#### Defined in

[math/Matrix.ts:8](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts?at&#x3D;873d649#line&#x3D;8)

___

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix3.ts:81](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;81)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix3.ts:89](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;89)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[math/Matrix3.ts:97](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;97)

___

### identity

• `Static` `get` **identity**(): [`Matrix3`](Matrix3.md)

获取单位矩阵

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[math/Matrix3.ts:104](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;104)

## Methods

### add

▸ **add**(`a`, `b?`): [`Matrix3`](Matrix3.md)

将两个 Matrix3 矩阵相加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3`](Matrix3.md) |  |
| `b?` | [`Matrix3`](Matrix3.md) | 如果不传，计算 this 和 a 的和 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:298](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;298)

___

### adjoint

▸ **adjoint**(`m?`): [`Matrix3`](Matrix3.md)

计算此矩阵的伴随矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `m?` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:150](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;150)

___

### clone

▸ **clone**(): [`Matrix3`](Matrix3.md)

从此矩阵创建一个新的 3*3 矩阵

#### Returns

[`Matrix3`](Matrix3.md)

a new Matrix3

#### Defined in

[math/Matrix3.ts:378](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;378)

___

### copy

▸ **copy**(`m`): [`Matrix3`](Matrix3.md)

将传入的 Matrix3 复制到此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `any` | 源矩阵 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:369](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;369)

___

### determinant

▸ **determinant**(): `any`

计算行列式

#### Returns

`any`

#### Defined in

[math/Matrix3.ts:159](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;159)

___

### equals

▸ **equals**(`a`, `b?`): `any`

判断两个矩阵是否近似相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3`](Matrix3.md) |  |
| `b?` | [`Matrix3`](Matrix3.md) | 如果不传，比较 this 和 a 是否近似相等 |

#### Returns

`any`

#### Defined in

[math/Matrix3.ts:329](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;329)

___

### frob

▸ **frob**(): `any`

计算此矩阵的 Frobenius 范数

#### Returns

`any`

Frobenius 范数

#### Defined in

[math/Matrix3.ts:288](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;288)

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Matrix3`](Matrix3.md)

从数组构建矩阵

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Matrix3`](Matrix3.md)

#### Inherited from

Matrix.fromArray

#### Defined in

[math/Matrix.ts:17](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts?at&#x3D;873d649#line&#x3D;17)

___

### fromMat4

▸ **fromMat4**(`m`): [`Matrix3`](Matrix3.md)

将 Matrix4 左上角的 3x3 值复制到给定的 Matrix3 中。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `any` | 源矩阵 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:279](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;279)

___

### fromQuat

▸ **fromQuat**(`q`): [`Matrix3`](Matrix3.md)

根据给定的四元数计算矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | Quaternion to create matrix from |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:259](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;259)

___

### fromRotation

▸ **fromRotation**(`rad`): [`Matrix3`](Matrix3.md)

计算单位矩阵旋转后的矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 旋转弧度 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:239](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;239)

___

### fromRotationTranslationScale

▸ **fromRotationTranslationScale**(`rotation`, `x`, `y`, `scaleX`, `scaleY`): [`Matrix3`](Matrix3.md)

从给定的旋转角度，位置（二维向量），缩放计算矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `any` |
| `x` | `any` |
| `y` | `any` |
| `scaleX` | `any` |
| `scaleY` | `any` |

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[math/Matrix3.ts:346](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;346)

___

### fromScaling

▸ **fromScaling**(`v`): [`Matrix3`](Matrix3.md)

计算单位矩阵缩放后的矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | Scaling vector |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:249](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;249)

___

### fromTranslation

▸ **fromTranslation**(`v`): [`Matrix3`](Matrix3.md)

计算单位矩阵平移后的矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Vector2.md) | 平移的向量 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:229](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;229)

___

### getNormalMatrix

▸ **getNormalMatrix**(`m`): [`Matrix3`](Matrix3.md)

从 4x4 矩阵计算 3x3 正态矩阵（转置逆矩阵）
这个值传递给着色器，用于计算物体的光照。 它是物体的modelViewMatrix矩阵中，左上角3x3子矩阵的逆的转置矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[math/Matrix3.ts:359](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;359)

___

### invert

▸ **invert**(`m?`): [`Matrix3`](Matrix3.md)

将此矩阵转换为逆矩阵

#### Parameters

| Name | Type |
| :------ | :------ |
| `m?` | [`Matrix3`](Matrix3.md) |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:140](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;140)

___

### multiply

▸ **multiply**(`a`, `b?`): [`Matrix3`](Matrix3.md)

计算两个Matrix3矩阵的乘积

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3`](Matrix3.md) |  |
| `b?` | [`Matrix3`](Matrix3.md) | 如果不传，计算 this 和 a 的乘积 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:169](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;169)

___

### normalFromMat4

▸ **normalFromMat4**(`m`): [`Matrix3`](Matrix3.md)

从 4x4 矩阵计算 3x3 正态矩阵（转置逆矩阵）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `any` | 给定的 Matrix4 矩阵 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:269](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;269)

___

### premultiply

▸ **premultiply**(`a`, `b?`): [`Matrix3`](Matrix3.md)

左乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3`](Matrix3.md) |  |
| `b?` | [`Matrix3`](Matrix3.md) | 如果不传，计算 this 和 a 的左乘 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:185](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;185)

___

### rotate

▸ **rotate**(`rad`): [`Matrix3`](Matrix3.md)

旋转此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | 弧度 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:209](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;209)

___

### scale

▸ **scale**(`v`): [`Matrix3`](Matrix3.md)

通过给定的 Vector2 向量缩放此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Vector2.md) | 向量 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:219](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;219)

___

### set

▸ **set**(`m00`, `m01`, `m02`, `m10`, `m11`, `m12`, `m20`, `m21`, `m22`): [`Matrix3`](Matrix3.md)

将此矩阵的每一项设置为给定的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `m00` | `any` |
| `m01` | `any` |
| `m02` | `any` |
| `m10` | `any` |
| `m11` | `any` |
| `m12` | `any` |
| `m20` | `any` |
| `m21` | `any` |
| `m22` | `any` |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:121](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;121)

___

### subtract

▸ **subtract**(`a`, `b?`): [`Matrix3`](Matrix3.md)

将两个 Matrix3 矩阵相减

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3`](Matrix3.md) |  |
| `b?` | [`Matrix3`](Matrix3.md) | 如果不传，计算 this 和 a 的差 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:314](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;314)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `number`[]

从矩阵转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `number`[]

#### Inherited from

Matrix.toArray

#### Defined in

[math/Matrix.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix.ts?at&#x3D;873d649#line&#x3D;30)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[math/Matrix3.ts:385](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;385)

___

### translate

▸ **translate**(`v`): [`Matrix3`](Matrix3.md)

通过给定的向量 Vector2 平移此矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Vector2.md) | 向量 |

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:199](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;199)

___

### transpose

▸ **transpose**(): [`Matrix3`](Matrix3.md)

将此矩阵转换为转置矩阵

#### Returns

[`Matrix3`](Matrix3.md)

this

#### Defined in

[math/Matrix3.ts:130](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Matrix3.ts?at&#x3D;873d649#line&#x3D;130)