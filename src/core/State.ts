import type { WithNull } from '../types';
import { isNull, isUndef } from '../utils';
import Color from '../math/Color';
import Base from './Base';
import Renderer from './Renderer';

enum blendType {
  NoBlending = 0,
  NormalBlending = 1,
  AdditiveBlending = 2,
  SubtractiveBlending = 3,
  MultiplyBlending = 4,
  CustomBlending = 5,
}

type IBlendType = blendType;

type FBOData = {
  target?: GLenum;
  buffer: WithNull<WebGLFramebuffer>;
}

interface StateOptions {
  textureUnits: number[];
  activeTextureUnit: number;
  activeGeometryId: string;

  colorMask: boolean;

  blending: IBlendType;

  premultiplyAlpha: boolean;

  blendFunc: {
    src: number;
    dst: number;
    srcAlpha?: number;
    dstAlpha?: number;
  };

  blendEquation: {
    modeRGB: number;
    modeAlpha?: number;
  };

  stencil: {
    func: GLenum;
    ref: GLenum;
    mask: GLenum;
  };

  clearAlpha: number;

  clearColor: Color;

  cullFace: GLenum;

  frontFace: GLenum;

  depthMask: boolean;

  depthFunc: GLenum;

  depthTest: boolean;

  depthWrite: boolean;

  unpackAlignment: number;

  flipY: boolean;

  lineWidth: number;

  polygonOffset: boolean;

  polygonOffsetFactor: GLenum;

  polygonOffsetUnits: GLenum;

  framebuffer: WithNull<WebGLFramebuffer>;

  viewport: { x: number, y: number, width: number, height: number }
}

interface IState extends StateOptions {
  framebuffer: WithNull<WebGLFramebuffer>;
}

export default class State extends Base {
  #state: IState;

  public locked: boolean;

  constructor (renderer: Renderer, options?: Partial<StateOptions>) {
    super(renderer);
    const { gl } = renderer;
    this.#state = {
      viewport: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      }
    } as IState;
    this.apply(options || {
      frontFace: gl.CCW,
      depthTest: false,
      depthWrite: true,
      depthMask: true,
      depthFunc: gl.LESS,
      blending: blendType.NormalBlending,
      blendFunc: {
        src: gl.ONE,
        dst: gl.ZERO
      },
      blendEquation: {
        modeRGB: gl.FUNC_ADD
      },
      premultiplyAlpha: false,
      unpackAlignment: 4,
      flipY: false,
      framebuffer: null,
      textureUnits: [],
      activeTextureUnit: -1,
      activeGeometryId: null,
      clearAlpha: 1,
      clearColor: new Color(0)
    } as unknown as StateOptions);
  }

  get state () {
    return this.#state;
  }

  get textureUnits () {
    return this.#state.textureUnits;
  }

  get activeTextureUnit () {
    return this.#state.activeTextureUnit;
  }

  get activeGeometryId () {
    return this.#state.activeGeometryId;
  }

  /**
   * apply options 并且更新状态
   * @param options
   */
  apply (options: Partial<StateOptions>) {
    if (options.blending) {
      this.setBlending(options.blending);
    } else {
      if (options.blendFunc) {
        const {
          src,
          dst,
          srcAlpha,
          dstAlpha
        } = options.blendFunc;
        this.setBlendFunc(src, dst, srcAlpha, dstAlpha);
        this.enable(this.gl.BLEND);
      } else {
        this.disable(this.gl.BLEND);
      }
      if (options.blendEquation) {
        const {
          modeRGB,
          modeAlpha
        } = options.blendEquation;
        this.setBlendEquation(modeRGB, modeAlpha);
      }
    }

    if (!isUndef(options.cullFace) && !isNull(options.cullFace)) {
      this.setCullFace(options.cullFace);
    }
    if (!isUndef(options.frontFace) && !isNull(options.frontFace)) {
      this.setFrontFace(options.frontFace);
    }

    if (options.depthTest) {
      this.enable(this.gl.DEPTH_TEST);
    } else {
      this.disable(this.gl.DEPTH_TEST);
    }

    if (!isUndef(options.depthMask) && !isNull(options.depthMask)) {
      this.setDepthMask(options.depthMask);
    }

    if (!isUndef(options.depthFunc) && !isNull(options.depthFunc)) {
      this.setDepthFunc(options.depthFunc);
    }

    if (!isUndef(options.lineWidth) && !isNull(options.lineWidth)) {
      this.setLineWidth(options.lineWidth);
    }

    this.#state = Object.assign(this.#state, options);
  }

  enable (id) {
    if (this.#state[id] !== true) {
      this.gl.enable(id);
      this.#state[id] = true;
    }
  }

  disable (id) {
    if (this.#state[id] !== false) {
      this.gl.disable(id);
      this.#state[id] = false;
    }
  }

  /**
   * 设置 State 是否锁定
   * @param lock
   */
  setLocked(lock: boolean) {
    this.locked = lock;
  }

  /**
   * 设置颜色缓冲的状态
   * 模板缓冲可以实现渲染剔除，需要遮罩的话，可能希望只绘制模板缓冲而不绘制颜色缓冲
   * gl.colorMask(false, false, false, false)：关闭颜色缓冲的所有通道
   * gl.colorMask(true, true, true, true)：开启颜色缓冲的所有通道
   * @param colorMask
   */
  setMask(colorMask: boolean) {
      if (this.#state.colorMask !== colorMask && !this.locked) {
      this.gl.colorMask(colorMask, colorMask, colorMask, colorMask);
      this.#state.colorMask = colorMask;
    }
  }

  /**
   * 指定渲染时的颜色混合方式
   * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
   * @param blending
   */
  setBlending (blending: IBlendType) {
    this.#state.blending = blending;
    if (blending === blendType.NoBlending) {
      this.disable(this.gl.BLEND);
    } else {
      this.enable(this.gl.BLEND);
    }
    if (blending === blendType.AdditiveBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ONE, this.gl.ONE, this.gl.ONE, this.gl.ONE);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
      }
    } else if (blending === blendType.SubtractiveBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.ZERO, this.gl.ONE_MINUS_SRC_COLOR, this.gl.ONE_MINUS_SRC_ALPHA);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.ONE_MINUS_SRC_COLOR);
      }
    } else if (blending === blendType.MultiplyBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.SRC_ALPHA);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ZERO, this.gl.SRC_COLOR);
      }
    } else if (blending === blendType.NormalBlending) {
      if (this.#state.premultiplyAlpha) {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
      } else {
        this.setBlendEquation(this.gl.FUNC_ADD, this.gl.FUNC_ADD);
        this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
      }
    } else if (blending === blendType.CustomBlending) {
      console.info('TODO: 需要实现');
    } else {
      console.error('State: Invalid blending: ', blending);
    }
  }

  /**
   * 设置混合方式
   * @param src
   * @param dst
   * @param srcAlpha
   * @param dstAlpha
   */
  setBlendFunc (src: number, dst: number, srcAlpha?: number, dstAlpha?: number) {
    if (
      src !== this.#state.blendFunc?.src
      || dst !== this.#state.blendFunc?.dst
      || srcAlpha !== this.#state.blendFunc?.srcAlpha
      || dstAlpha !== this.#state.blendFunc?.dstAlpha
    ) {
      this.#state.blendFunc = {
        src,
        dst,
        srcAlpha,
        dstAlpha
      };
      if (!isUndef(srcAlpha) && !isNull(srcAlpha) && !isUndef(dstAlpha) && !isNull(dstAlpha)) {
        this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
      } else {
        this.gl.blendFunc(src, dst);
      }
    }
  }

  /**
   * 设置 blendEquation
   * gl.FUNC_ADD：相加处理
   * gl.FUNC_SUBTRACT：相减处理
   * gl.FUNC_REVERSE_SUBSTRACT：反向相减处理，即 dest 减去 source
   *
   * @param modeRGB
   * @param modeAlpha
   */
  setBlendEquation (modeRGB: number, modeAlpha?: number) {
    if(modeRGB !== this.#state.blendEquation?.modeRGB || modeAlpha !== this.#state.blendEquation?.modeAlpha) {
      this.#state.blendEquation = {
        modeRGB,
        modeAlpha,
      };

      if (!isUndef(modeAlpha) && !isNull(modeAlpha)) {
        this.gl.blendEquationSeparate(modeRGB, modeAlpha);
      } else {
        this.gl.blendEquation(modeRGB);
      }
    }
  }

  /**
   * 设置当前 State 下的清屏的透明度
   * @param alpha
   */
  setClearAlpha (alpha: number) {
    this.#state.clearAlpha = alpha;
  }

  /**
   * 设置清屏颜色和透明度值
   * @param color 颜色
   * @param alpha 透明度
   */
  setClearColor (color: Color, alpha: number) {
    this.#state.clearColor = color;
    this.#state.clearAlpha = alpha;
    this.gl.clearColor(color.r, color.g, color.b, alpha);
  }

  /**
   * 设置北面剔除方式
   * @param cullFace
   */
  setCullFace (cullFace: GLenum) {
    if (this.#state.cullFace !== cullFace) {
      if (cullFace) {
        this.gl.enable(this.gl.CULL_FACE);
      } else {
        this.gl.disable(this.gl.CULL_FACE);
      }

      this.#state.cullFace = cullFace;
      this.gl.cullFace(cullFace);
    }
  }

  /**
   * 设置正面三角形顶点顺序
   * 绘制立体图形时会使用三角形的顶点顺序来决定三角形的面是否朝向观察者，背向观察者的三角形一般不进行光栅化处理，绘制时会被剔除
   * @param frontFace
   */
  setFrontFace (frontFace: GLenum) {
    if (this.#state.frontFace !== frontFace) {
      this.#state.frontFace = frontFace;
      this.gl.frontFace(frontFace);
    }
  }

  /**
   * 设置深度缓冲区的写入操作方式（只读或者可写）
   * @param mask
   */
  setDepthMask (mask: boolean) {
    if (this.#state.depthMask !== mask) {
      this.#state.depthMask = mask;
      this.gl.depthMask(mask);
    }
  }

  /**
   * 指定将输入像素深度与当前深度缓冲区值进行比较的函数
   * @param func
   */
  setDepthFunc (func: GLenum) {
    if (this.#state.depthFunc !== func) {
      this.#state.depthFunc = func;
      this.gl.depthFunc(func);
    }
  }

  /**
   * 设置是否开启深度测试
   * @param state
   */
  setDepthTest (state: boolean) {
    if (this.#state.depthTest !== state) {
      this.#state.depthTest = state;
      if (state) {
        this.enable(this.gl.DEPTH_TEST);
      } else {
        this.disable(this.gl.DEPTH_TEST);
      }
    }
  }

  /**
   * 设置模板缓冲
   * @param func
   * @param ref
   * @param mask
   */
  setStencil(func: GLenum, ref: GLenum, mask: GLenum) {
    if (this.#state.stencil.func !== func || this.#state.stencil.ref !== ref || this.#state.stencil.mask !== mask) {
      this.#state.stencil = {
        func,
        ref,
        mask,
      };
      this.gl.stencilFunc(func, ref, mask);
    }
  }

  /**
   * 设置当前激活的纹理单位
   * @param unit
   */
  setActiveTexture (unit) {
    if (this.#state.activeTextureUnit !== unit) {
      this.#state.activeTextureUnit = unit;
      this.gl.activeTexture(this.gl.TEXTURE0 + unit);
    }
  }

  /**
   * 设置 webgl 的线宽（注意大部分浏览器下是有 BUG 的）
   * @param width
   */
  setLineWidth(width) {
    if (this.#state.lineWidth !== width) {
      this.#state.lineWidth = width;
      this.gl.lineWidth(width);
    }
  }

  /**
   * 设置深度值的偏移量，主要可以用于解决当几何图形或物体的两个表面非常接近时会出现的深度冲突(Z fighting)。
   * 原因是因为两个表面过于接近，深度缓冲区有限的精度无法区分哪个在前哪个在后。
   *
   * gl.polygonOffset(factor, units)方法指定加到每个顶点绘制后Z值上的偏移量，
   * 偏移量按照公式 `m*factor+r*units` 计算，其中m表示顶点所在表面相对于观察者的视线的角度，
   * 而r表示硬件能够区分两个Z值之差的最小值
   * @param polygonOffset
   * @param factor
   * @param units
   */
  setPolygonOffset(polygonOffset, factor, units) {
    if (polygonOffset) {
      this.enable(this.gl.POLYGON_OFFSET_FILL);
      if (this.#state.polygonOffsetFactor !== factor || this.#state.polygonOffsetUnits !== units) {
        this.gl.polygonOffset(factor, units);

        this.#state.polygonOffsetFactor = factor;
        this.#state.polygonOffsetUnits = units;
      }
    } else {
      this.disable(this.gl.POLYGON_OFFSET_FILL);
    }
  }

  /**
   * 绑定或者解绑 FBO
   * @param v
   */
  bindFramebuffer (v: FBOData = {} as FBOData) {
    const {
      target = this.gl.FRAMEBUFFER,
      buffer = null
    } = v;
    if (this.#state.framebuffer !== buffer) {
      this.#state.framebuffer = buffer;
      this.gl.bindFramebuffer(target, buffer);
    }
  }

  /**
   * 设置当前激活的 Geometry
   * @param id
   */
  setActiveGeometry (id) {
    this.#state.activeGeometryId = id;
  }
};
