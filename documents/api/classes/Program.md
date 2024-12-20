# Class: Program

着色器程序对象封装，主要功能如下：
- 创建Program管线，编译顶点着色器和片段着色器源码；
- 管理`Attribute`属性
- 管理`Uniform`属性
- 渲染状态的切换

示例代码：
```jsx live
function render(props) {
  const drawModelVertex = `
    attribute vec2 uv;
    attribute vec3 position;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;

    void main() {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

        // gl_PointSize only applicable for gl.POINTS draw mode
        gl_PointSize = 5.0;
    }
    `;

  const drawModelFragment = `
    precision highp float;

    uniform float uTime;
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = 0.5 + 0.3 * sin(vUv.yxx + uTime) + vec3(0.2, 0.0, 0.1);
        gl_FragColor.a = 1.0;
    }
    `;

  const refDom = useRef(null);

  const init = () => {
    const canvas = refDom.current;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const renderer = new Renderer(canvas, {
      alpha: true,
    });

    const fov = 15;
    const nearZ = 0.1;

    const farZ = 100;
    const camera = new PerspectiveCamera(fov, canvas.width / canvas.height, nearZ, farZ);
    camera.position.z = 15;

    function resize(target) {
      const { width, height } = target.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
    }

    const scene = new Scene();

    const geometry = new Geometry(renderer, {
      position: {
        size: 3,
        data: new Float32Array([
          -0.5, 0.5, 0,
          -0.5, -0.5, 0,
          0.5, 0.5, 0,
          0.5, -0.5, 0
        ])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
      },
      index: {
        data: new Uint16Array([0, 1, 2, 1, 3, 2])
      },
    });

    const program = new Program(renderer, {
      vertexShader: drawModelVertex,
      fragmentShader: drawModelFragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
    points.setParent(scene);
    points.position.set(-1, 1, 0);

    const lineStrip = new Mesh(renderer, { mode: renderer.gl.LINES, geometry, program });
    lineStrip.setParent(scene);
    lineStrip.position.set(1, 1, 0);

    const lineLoop = new Mesh(renderer, { mode: renderer.gl.LINE_LOOP, geometry, program });
    lineLoop.setParent(scene);
    lineLoop.position.set(-1, -1, 0);

    const triangles = new Mesh(renderer, { mode: renderer.gl.TRIANGLES, geometry, program });
    triangles.setParent(scene);
    triangles.position.set(1, -1, 0);

    const raf = new Raf((t) => {
      program.setUniform('uTime', t);
      renderer.render({ scene, camera });
    });

    return {
      canvas,
      resize,
    }
  }

  useEffect(() => {
    const { canvas, resize } = init();

    observe(canvas, resize);

    return () => {
      unobserve(canvas, resize);
    };
  }, []);

  return (
    <div className="live-wrap">
      <canvas className="scene-canvas" ref={refDom}></canvas>
    </div>
  );
}
```

## Hierarchy

- [`Resource`](Resource.md)\<[`ProgramOptions`](../interfaces/ProgramOptions.md)\>

  ↳ **`Program`**

## Table of contents

### Constructors

- [constructor](Program.md#constructor)

### Properties

- [renderer](Program.md#renderer)
- [attributeOrder](Program.md#attributeorder)
- [uniforms](Program.md#uniforms)
- [id](Program.md#id)
- [name](Program.md#name)
- [userData](Program.md#userdata)
- [byteLength](Program.md#bytelength)
- [options](Program.md#options)

### Accessors

- [gl](Program.md#gl)
- [rendererState](Program.md#rendererstate)
- [uniformLocations](Program.md#uniformlocations)
- [attributeLocations](Program.md#attributelocations)
- [vertexShader](Program.md#vertexshader)
- [fragmentShader](Program.md#fragmentshader)
- [handle](Program.md#handle)

### Methods

- [use](Program.md#use)
- [setStates](Program.md#setstates)
- [applyState](Program.md#applystate)
- [setUniform](Program.md#setuniform)
- [bind](Program.md#bind)
- [unbind](Program.md#unbind)
- [createHandle](Program.md#createhandle)
- [deleteHandle](Program.md#deletehandle)
- [destroy](Program.md#destroy)
- [swapHandle](Program.md#swaphandle)
- [restoreHandle](Program.md#restorehandle)
- [delete](Program.md#delete)
- [removeStats](Program.md#removestats)
- [toString](Program.md#tostring)

## Constructors

### constructor

• **new Program**(`renderer`, `options?`): [`Program`](Program.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `any` |
| `options` | `Partial`\<[`ProgramOptions`](../interfaces/ProgramOptions.md)\> |

#### Returns

[`Program`](Program.md)

#### Overrides

[Resource](Resource.md).[constructor](Resource.md#constructor)

#### Defined in

[src/core/Program.ts:336](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L336)

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

#### Inherited from

[Resource](Resource.md).[renderer](Resource.md#renderer)

#### Defined in

[src/core/Base.ts:7](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L7)

___

### attributeOrder

• **attributeOrder**: `string`

#### Defined in

[src/core/Program.ts:322](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L322)

___

### uniforms

• **uniforms**: `any`

#### Defined in

[src/core/Program.ts:324](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L324)

___

### id

• **id**: `string`

#### Inherited from

[Resource](Resource.md).[id](Resource.md#id)

#### Defined in

[src/core/Resource.ts:21](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L21)

___

### name

• **name**: `WithUndef`\<`string`\>

#### Inherited from

[Resource](Resource.md).[name](Resource.md#name)

#### Defined in

[src/core/Resource.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L23)

___

### userData

• **userData**: `any`

#### Inherited from

[Resource](Resource.md).[userData](Resource.md#userdata)

#### Defined in

[src/core/Resource.ts:25](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L25)

___

### byteLength

• **byteLength**: `number`

#### Inherited from

[Resource](Resource.md).[byteLength](Resource.md#bytelength)

#### Defined in

[src/core/Resource.ts:28](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L28)

___

### options

• **options**: `Partial`\<[`ProgramOptions`](../interfaces/ProgramOptions.md)\>

#### Inherited from

[Resource](Resource.md).[options](Resource.md#options)

#### Defined in

[src/core/Resource.ts:30](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L30)

## Accessors

### gl

• `get` **gl**(): `WebGLRenderingContext` \| `WebGL2RenderingContext`

获取 `webgl` 实例

#### Returns

`WebGLRenderingContext` \| `WebGL2RenderingContext`

#### Inherited from

Resource.gl

#### Defined in

[src/core/Base.ts:16](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L16)

___

### rendererState

• `get` **rendererState**(): [`State`](State.md)

获取渲染状态

#### Returns

[`State`](State.md)

#### Inherited from

Resource.rendererState

#### Defined in

[src/core/Base.ts:23](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Base.ts#L23)

___

### uniformLocations

• `get` **uniformLocations**(): `Map`\<`any`, `any`\>

#### Returns

`Map`\<`any`, `any`\>

#### Defined in

[src/core/Program.ts:419](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L419)

___

### attributeLocations

• `get` **attributeLocations**(): `Map`\<`any`, `any`\>

#### Returns

`Map`\<`any`, `any`\>

#### Defined in

[src/core/Program.ts:423](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L423)

___

### vertexShader

• `get` **vertexShader**(): `VertexShader`

获取 `VertexShader` 对象

#### Returns

`VertexShader`

#### Defined in

[src/core/Program.ts:430](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L430)

___

### fragmentShader

• `get` **fragmentShader**(): `FragmentShader`

获取 `FragmentShader` 对象

#### Returns

`FragmentShader`

#### Defined in

[src/core/Program.ts:437](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L437)

___

### handle

• `get` **handle**(): `any`

#### Returns

`any`

#### Inherited from

Resource.handle

#### Defined in

[src/core/Resource.ts:47](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L47)

## Methods

### use

▸ **use**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Program.ts:444](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L444)

___

### setStates

▸ **setStates**(`states`, `merge?`): `void`

设置 Program 的 render state

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `states` | `Partial`\<[`ProgramRenderState`](../interfaces/ProgramRenderState.md)\> | `undefined` |  |
| `merge` | `boolean` | `true` | 是否使用合并模式，如果为 `false` 则直接替换 |

#### Returns

`void`

#### Defined in

[src/core/Program.ts:503](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L503)

___

### applyState

▸ **applyState**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Program.ts:526](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L526)

___

### setUniform

▸ **setUniform**(`key`, `value`): `void`

设置对应的 Uniform 值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/core/Program.ts:535](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L535)

___

### bind

▸ **bind**(): `void`

使用此 Program

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[bind](Resource.md#bind)

#### Defined in

[src/core/Program.ts:544](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L544)

___

### unbind

▸ **unbind**(): `void`

取消使用此 `Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[unbind](Resource.md#unbind)

#### Defined in

[src/core/Program.ts:551](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L551)

___

### createHandle

▸ **createHandle**(): ``null`` \| `WebGLProgram`

#### Returns

``null`` \| `WebGLProgram`

#### Overrides

[Resource](Resource.md).[createHandle](Resource.md#createhandle)

#### Defined in

[src/core/Program.ts:555](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L555)

___

### deleteHandle

▸ **deleteHandle**(): `void`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[deleteHandle](Resource.md#deletehandle)

#### Defined in

[src/core/Program.ts:559](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L559)

___

### destroy

▸ **destroy**(): `void`

销毁此`Program`

#### Returns

`void`

#### Overrides

[Resource](Resource.md).[destroy](Resource.md#destroy)

#### Defined in

[src/core/Program.ts:609](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Program.ts#L609)

___

### swapHandle

▸ **swapHandle**(`handle`): `void`

交换为新的 `handle`（一般我们会用在虚拟 webgl 环境中）

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[swapHandle](Resource.md#swaphandle)

#### Defined in

[src/core/Resource.ts:55](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L55)

___

### restoreHandle

▸ **restoreHandle**(): `void`

恢复为原有 `handle`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[restoreHandle](Resource.md#restorehandle)

#### Defined in

[src/core/Resource.ts:63](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L63)

___

### delete

▸ **delete**(`«destructured»?`): [`Program`](Program.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `deleteChildren` | `undefined` \| `boolean` | `false` |

#### Returns

[`Program`](Program.md)

#### Inherited from

[Resource](Resource.md).[delete](Resource.md#delete)

#### Defined in

[src/core/Resource.ts:74](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L74)

___

### removeStats

▸ **removeStats**(): `void`

#### Returns

`void`

#### Inherited from

[Resource](Resource.md).[removeStats](Resource.md#removestats)

#### Defined in

[src/core/Resource.ts:99](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L99)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Resource](Resource.md).[toString](Resource.md#tostring)

#### Defined in

[src/core/Resource.ts:111](https://github.com/sakitam-gis/vis-engine/blob/master/src/core/Resource.ts#L111)
