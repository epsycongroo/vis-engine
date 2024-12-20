import Resource, { ResourceOptions } from './Resource';
import Renderer from './Renderer';
import { getShaderName } from '../utils';

const ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';

const cachedIds = {};
function genShaderName(key = 'id') {
  cachedIds[key] = cachedIds[key] || 1;
  const idx = cachedIds[key];
  cachedIds[key] += 1;
  return ''.concat(key, '-').concat(idx);
}

type ShaderType = 'vertex-shader' | 'fragment-shader' | 'unknown';

const getTypeName = (ctx, shaderType: any): ShaderType => {
  switch (shaderType) {
    case ctx.VERTEX_SHADER:
      return 'vertex-shader';
    case ctx.FRAGMENT_SHADER:
      return 'fragment-shader';
    default:
      return 'unknown';
  }
};

const getShaderType = (ctx, type) => {
  switch (type) {
    case 'fragment':
      return ctx.FRAGMENT_SHADER;
    case 'vertex':
      return ctx.VERTEX_SHADER;
    default:
      return;
  }
};

function addLineNumbers(string: string) {
  const lines = string.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }
  return lines.join('\n');
}

export class Shader extends Resource<ResourceOptions> {
  private _shaderType: ShaderType;

  private _includes: {
    [key: string]: string;
  };

  public sourceCode: string;

  constructor(renderer: Renderer, sourceCode, type, includes = {}) {
    const shaderType = getShaderType(renderer.gl, type);
    super(renderer, {
      name: getShaderName(sourceCode) || genShaderName(getTypeName(renderer, shaderType)),
    });
    console.assert(typeof sourceCode === 'string', ERR_SOURCE);
    this._includes = includes;
    this._shaderType = shaderType;
    this.sourceCode = this.injectShaderModule(sourceCode, includes || {}).replace(
      /\n\n+/gm,
      '\n\n',
    );
    this.createShader(this.sourceCode);
  }

  injectShaderModule(shader, modules = {}) {
    const regExp = /^[\t ]*#glsl_include +<([\w.]+)>/gm;
    const replacement = (substring, r) => {
      let module = modules[r];
      if (module === undefined) throw new Error('Cannot resolve #include <'.concat(r, '>'));
      module = module.replace(/#include </g, '#glsl_include <');
      return this.injectShaderModule(module, modules);
    };
    return shader.replace(regExp, replacement);
  }

  createShader(source = this.source) {
    let s = source.replace(/#include </g, '#glsl_include <');
    s = this.injectShaderModule(s, this._includes || {}).replace(/\n\n+/gm, '\n\n');
    this.gl.shaderSource(this.handle, s);
    this.gl.compileShader(this.handle);
    if (!this.gl.getShaderParameter(this.handle, this.gl.COMPILE_STATUS)) {
      const log = this.gl.getShaderInfoLog(this.handle) || '';
      this.gl.deleteShader(this.handle);
      throw new Error(`${this.toString()}\n${log}\n${addLineNumbers(s)}`);
    }
  }

  get source() {
    return this.sourceCode;
  }

  get shaderType() {
    return this._shaderType;
  }

  getSource() {
    return this.gl.getShaderSource(this.handle);
  }

  setSource(source) {
    const name = getShaderName(source);
    if (name) {
      this.name = genShaderName(name);
    }
    this.createShader(source);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeStats() {}

  deleteHandle() {
    this.gl.deleteShader(this.handle);
  }

  toString(): string {
    return `${getTypeName(this.gl, this.shaderType)}:${this.id}`;
  }
}

/**
 * 顶点着色器
 */
export class VertexShader extends Shader {
  constructor(renderer: Renderer, sourceCode: string, includes) {
    super(renderer, sourceCode, 'vertex', includes);
  }

  createHandle() {
    return this.gl.createShader(this.gl.VERTEX_SHADER);
  }
}

/**
 * 片段着色器
 */
export class FragmentShader extends Shader {
  constructor(renderer: Renderer, sourceCode: string, includes) {
    super(renderer, sourceCode, 'fragment', includes);
  }

  createHandle() {
    return this.gl.createShader(this.gl.FRAGMENT_SHADER);
  }
}
