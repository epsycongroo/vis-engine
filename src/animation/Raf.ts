import Clock from './Clock';
import { requestAnimationFrame, cancelAnimationFrame } from '../utils';

/**
 * Raf 配置项
 */
export interface RafOptions {
  /**
   * @defaultValue `true`, 是否在创建 raf 实例后自动启动
   */
  autoStart: boolean;
}

const defaultOptions: Partial<RafOptions> = {
  autoStart: true,
};

/**
 * 优化的 raf 管理
 * ```ts
 * const raf = new Raf();
 * ```
 */
export default class Raf {
  public options: Partial<RafOptions>;
  private raf: number;
  private _animating: boolean;
  private _isVisible: boolean;

  private clock: Clock;

  private _callback: () => void;

  constructor(cb, options: Partial<RafOptions> = {}) {
    this.options = {
      ...options,
      ...defaultOptions,
    };
    this.clock = new Clock();

    this.reset();

    this.onVisibilityChange = this.onVisibilityChange.bind(this);

    this._callback = () => {
      const time = this.clock.getElapsedTime();
      cb && cb(time);
    };
    if (this.options.autoStart) {
      this.start();
    }
  }

  /**
   * 获取当前页面是否可见
   */
  public get visible() {
    return this._isVisible;
  }

  /**
   * 获取当前`raf` 状态
   */
  public get animating() {
    return this._animating;
  }

  /**
   * 重置当前 `raf` 状态
   */
  public reset() {
    this._animating = false;
    this._isVisible = true;
    if (this.raf !== undefined) {
      cancelAnimationFrame(this.raf);
    }
  }

  /**
   * 获取总时长
   */
  public get elapsedTime() {
    return this.clock.getElapsedTime();
  }

  /**
   * 启动 `raf`
   */
  public start() {
    // 如果已经启动，不需要再次启动
    if (this.animating) return;

    this._animating = true;
    this.clock.start();
    this.tick();

    if (typeof window !== 'undefined' && window.document) {
      window.document.addEventListener('visibilitychange', this.onVisibilityChange, false);
    }
  }

  /**
   * 停止 `raf`
   */
  public stop() {
    this.clock.stop();
    this.reset();
    if (typeof window !== 'undefined' && window.document) {
      window.document.removeEventListener('visibilitychange', this.onVisibilityChange, false);
    }
  }

  public tick() {
    if (!this.animating || !this._isVisible) return;
    // @tip 注意如果需要进行锁帧，需要在此处进行逻辑处理
    this.raf = requestAnimationFrame(() => {
      this.tick();
    });
    this._callback();
  }

  /**
   * 处理页面可见和不可见逻辑
   * @private
   */
  private onVisibilityChange() {
    if (typeof window !== 'undefined' && window.document) {
      this._isVisible = !window.document.hidden;
    }

    if (this._isVisible) {
      this.reset();
      this.start();
    }
  }
}
