# Class: Vector4

四维向量，四维向量表示的是一个有顺序的、四个为一组的数字组合，可以用来描述：
- 一个位于四维空间中的点。
- 一个在四维空间中的方向与长度的定义。
```ts
const a = new Vector4(0, 1, 0);

const b = new Vector4(0, 0, 0);

const d = a.distanceTo(b);
```

## Hierarchy

- `default`

  ↳ **`Vector4`**

## Table of contents

### Constructors

- [constructor](Vector4.md#constructor)

### Properties

- [elements](Vector4.md#elements)

### Accessors

- [x](Vector4.md#x)
- [y](Vector4.md#y)
- [z](Vector4.md#z)
- [w](Vector4.md#w)

### Methods

- [fromArray](Vector4.md#fromarray)
- [toArray](Vector4.md#toarray)
- [fromObject](Vector4.md#fromobject)
- [toObject](Vector4.md#toobject)
- [set](Vector4.md#set)
- [setScalar](Vector4.md#setscalar)
- [add](Vector4.md#add)
- [addScalar](Vector4.md#addscalar)
- [subtract](Vector4.md#subtract)
- [subtractScalar](Vector4.md#subtractscalar)
- [subVectors](Vector4.md#subvectors)
- [multiply](Vector4.md#multiply)
- [multiplyScalar](Vector4.md#multiplyscalar)
- [divide](Vector4.md#divide)
- [divideScalar](Vector4.md#dividescalar)
- [scale](Vector4.md#scale)
- [scaleAndAdd](Vector4.md#scaleandadd)
- [distanceTo](Vector4.md#distanceto)
- [distanceToSquared](Vector4.md#distancetosquared)
- [length](Vector4.md#length)
- [dot](Vector4.md#dot)
- [equals](Vector4.md#equals)
- [cross](Vector4.md#cross)
- [negate](Vector4.md#negate)
- [inverse](Vector4.md#inverse)
- [lerp](Vector4.md#lerp)
- [normalize](Vector4.md#normalize)
- [applyMatrix4](Vector4.md#applymatrix4)
- [applyQuaternion](Vector4.md#applyquaternion)
- [copy](Vector4.md#copy)
- [clone](Vector4.md#clone)
- [toString](Vector4.md#tostring)

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`, `w?`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 向量的x值，默认为0 |
| `y` | `number` | `0` | 向量的y值，默认为0 |
| `z` | `number` | `0` | 向量的z值，默认为0 |
| `w` | `number` | `0` | 向量的w值，默认为0 |

#### Returns

[`Vector4`](Vector4.md)

#### Overrides

Vector.constructor

#### Defined in

[src/math/Vector4.ts:49](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L49)

## Properties

### elements

• **elements**: `Float32Array` \| `Float64Array`

#### Overrides

Vector.elements

#### Defined in

[src/math/Vector4.ts:41](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L41)

## Accessors

### x

• `get` **x**(): `number`

获取向量 x 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector4.ts:62](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L62)

• `set` **x**(`x`): `void`

设置向量 x 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector4.ts:70](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L70)

___

### y

• `get` **y**(): `number`

获取向量 y 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector4.ts:78](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L78)

• `set` **y**(`y`): `void`

设置向量 y 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector4.ts:86](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L86)

___

### z

• `get` **z**(): `number`

获取向量 z 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector4.ts:94](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L94)

• `set` **z**(`z`): `void`

设置向量 z 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector4.ts:102](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L102)

___

### w

• `get` **w**(): `number`

获取向量 w 值

#### Returns

`number`

number;

#### Defined in

[src/math/Vector4.ts:110](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L110)

• `set` **w**(`w`): `void`

设置向量 w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector4.ts:118](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L118)

## Methods

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Vector4`](Vector4.md)

从数组构建向量数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any` | `undefined` | 原始数组 |
| `offset` | `number` | `0` | 数组偏移量 |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

Vector.fromArray

#### Defined in

[src/math/Vector.ts:15](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts#L15)

___

### toArray

▸ **toArray**(`out?`, `offset?`): `Float32Array` \| `Float64Array` \| `number`[]

从向量转换到数组

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `out` | `Float32Array` \| `Float64Array` \| `number`[] | `[]` | 输出数据 |
| `offset` | `number` | `0` | 偏移量 |

#### Returns

`Float32Array` \| `Float64Array` \| `number`[]

#### Inherited from

Vector.toArray

#### Defined in

[src/math/Vector.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector.ts#L28)

___

### fromObject

▸ **fromObject**(`object`): [`Vector4`](Vector4.md)

从对象赋值 Vector3 的 x、y、z、w 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:126](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L126)

___

### toObject

▸ **toObject**(): `Object`

转换到对象

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Defined in

[src/math/Vector4.ts:138](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L138)

___

### set

▸ **set**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

设置向量的 x、y、z、w

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |
| `w` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:154](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L154)

___

### setScalar

▸ **setScalar**(`s`): [`Vector4`](Vector4.md)

将向量的每个值设置为标量 s

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `any` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:163](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L163)

___

### add

▸ **add**(`vec`): [`Vector4`](Vector4.md)

将传入的向量vec和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector4 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:171](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L171)

___

### addScalar

▸ **addScalar**(`v`): [`Vector4`](Vector4.md)

将传入的标量量 v 和这个向量相加，会改变当前向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 传入的 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:180](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L180)

___

### subtract

▸ **subtract**(`vec`): [`Vector4`](Vector4.md)

从此向量减去 vec 四维向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 传入的 Vector4 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:189](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L189)

___

### subtractScalar

▸ **subtractScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量减去标量 v，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:198](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L198)

___

### subVectors

▸ **subVectors**(`a`, `b`): [`Vector4`](Vector4.md)

将向量 a 与向量 b 相减后的向量赋值给此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector4`](Vector4.md) |
| `b` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:208](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L208)

___

### multiply

▸ **multiply**(`vec`): [`Vector4`](Vector4.md)

将此向量与 vec 向量相乘

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:217](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L217)

___

### multiplyScalar

▸ **multiplyScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相乘，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:226](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L226)

___

### divide

▸ **divide**(`vec`): [`Vector4`](Vector4.md)

将此向量与 vec 向量相除

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:235](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L235)

___

### divideScalar

▸ **divideScalar**(`v`): [`Vector4`](Vector4.md)

从此向量各分量与标量 v 相除，默认构建一个四维向量 [v, v, v, v]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | 标量值 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:244](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L244)

___

### scale

▸ **scale**(`s`): [`Vector4`](Vector4.md)

缩放此向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:253](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L253)

___

### scaleAndAdd

▸ **scaleAndAdd**(`v`, `s`): [`Vector4`](Vector4.md)

按标量缩放 v 向量后与此向量相加

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector4`](Vector4.md) |
| `s` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:263](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L263)

___

### distanceTo

▸ **distanceTo**(`vec`): `any`

计算该向量到所传入的 v 间的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector4.ts:272](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L272)

___

### distanceToSquared

▸ **distanceToSquared**(`vec`): `any`

计算两个 Vector4 之间的平方距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector4.ts:280](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L280)

___

### length

▸ **length**(): `any`

计算从 `[0, 0, 0, 0]` 到此向量的直线距离

#### Returns

`any`

#### Defined in

[src/math/Vector4.ts:287](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L287)

___

### dot

▸ **dot**(`vec`): `any`

计算此向量与 vec 向量的点积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector4.ts:295](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L295)

___

### equals

▸ **equals**(`vec`): `any`

判断传入的向量 vec 与此向量是否相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

`any`

#### Defined in

[src/math/Vector4.ts:303](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L303)

___

### cross

▸ **cross**(`vec`): [`Vector4`](Vector4.md)

将该向量设置为它本身与传入的vec的叉积

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:311](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L311)

___

### negate

▸ **negate**(): [`Vector4`](Vector4.md)

针对此向量取反

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:319](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L319)

___

### inverse

▸ **inverse**(): [`Vector4`](Vector4.md)

针对此向量取倒数

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:327](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L327)

___

### lerp

▸ **lerp**(`vec`, `t`): [`Vector4`](Vector4.md)

从此向量到 vec 向量进行插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector4`](Vector4.md) | 目标向量 |
| `t` | `number` | 插值因数，范围一般在[0-1]，通常在这两个值之间 |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:337](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L337)

___

### normalize

▸ **normalize**(): [`Vector4`](Vector4.md)

将此向量转换为单位向量 (将其设置为与此向量具有相同方向但长度为 1 的向量)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:345](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L345)

___

### applyMatrix4

▸ **applyMatrix4**(`matrix`): [`Vector4`](Vector4.md)

将此向量乘以 Matrix4

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:354](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L354)

___

### applyQuaternion

▸ **applyQuaternion**(`quaternion`): [`Vector4`](Vector4.md)

将 Quaternion 变换应用到该向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:363](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L363)

___

### copy

▸ **copy**(`vec4`): [`Vector4`](Vector4.md)

将传递的 Vector4 的 x 、y、 z、w 属性的值复制到此 Vector4

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec4` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:372](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L372)

___

### clone

▸ **clone**(): [`Vector4`](Vector4.md)

克隆此向量

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

[src/math/Vector4.ts:383](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L383)

___

### toString

▸ **toString**(): `string`

转换为字符串

#### Returns

`string`

#### Defined in

[src/math/Vector4.ts:390](https://github.com/sakitam-gis/vis-engine/blob/master/src/math/Vector4.ts#L390)
