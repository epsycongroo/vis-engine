# Interface: MeshOptions

## Table of contents

### Properties

- [id](MeshOptions.md#id)
- [geometry](MeshOptions.md#geometry)
- [program](MeshOptions.md#program)
- [mode](MeshOptions.md#mode)
- [frustumCulled](MeshOptions.md#frustumculled)
- [renderOrder](MeshOptions.md#renderorder)
- [wireframe](MeshOptions.md#wireframe)

## Properties

### id

• `Optional` **id**: `string`

`Mesh` 的`id`

#### Defined in

[src/objects/Mesh.ts:19](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L19)

___

### geometry

• **geometry**: [`Geometry`](../classes/Geometry.md)

几何体`Geometry`对象

#### Defined in

[src/objects/Mesh.ts:24](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L24)

___

### program

• **program**: [`Program`](../classes/Program.md)

`Program` 对象

#### Defined in

[src/objects/Mesh.ts:29](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L29)

___

### mode

• `Optional` **mode**: `number`

渲染方式，默认值为`gl.TRIANGLES`。
其他可用值如下：
- `gl.POINTS`: 绘制一系列点。
- `gl.LINE_STRIP`: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
- `gl.LINE_LOOP`: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
- `gl.LINES`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
- `gl.TRIANGLE_STRIP`：绘制一个三角带。
- `gl.TRIANGLE_FAN`：绘制一个三角扇。
- `gl.TRIANGLES`: 绘制一系列三角形。每三个点作为顶点。

#### Defined in

[src/objects/Mesh.ts:42](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L42)

___

### frustumCulled

• `Optional` **frustumCulled**: `boolean`

是否启用视锥体剔除

#### Defined in

[src/objects/Mesh.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L47)

___

### renderOrder

• `Optional` **renderOrder**: `number`

指定`Mesh` 的渲染顺序值

#### Defined in

[src/objects/Mesh.ts:52](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L52)

___

### wireframe

• `Optional` **wireframe**: `boolean`

设置是否是网格渲染，默认是 `false`。当此值为 `true` 时，会去构建 `wireframeIndex` 索引。

#### Defined in

[src/objects/Mesh.ts:57](https://github.com/sakitam-gis/vis-engine/blob/master/src/objects/Mesh.ts#L57)
