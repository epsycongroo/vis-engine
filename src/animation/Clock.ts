import { now } from '../utils';

/**
 * 时钟对象，默认内部会使用 [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) 否则会
 * 回退到 `Date.now()`.
 * ```ts
 * const clock = new Clock();
 * ```
 */
export default class Clock {
  /**
   * 上次标记的时间
   * @private
   */
  private lastTime = 0;

  /**
   * 间隔时间
   * @private
   */
  private elapsedTime = 0;

  /**
   * 时钟是否启动
   * @private
   */
  private _start = false;

  public running: boolean;

  /**
   * Constructor
   * @param running 时钟状态
   */
  constructor (running = true) {
    this.running = running;
  }

  /**
   * 启动时钟
   */
  start () {
    if (!this._start) {
      this.reset();
      this._start = true;
    }
  }

  /**
   * 停止时钟
   */
  stop () {
    this.getElapsedTime();
    this._start = false;
    this.running = false;
  }

  /**
   * 重置时钟状态
   */
  reset () {
    this.lastTime = now();
    this.elapsedTime = 0;
  }

  /**
   * 获取自时钟启动以来经过的秒数
   */
  getElapsedTime () {
    this.getDelta();
    return this.elapsedTime;
  }

  /**
   * 计算时钟总启动时间，并将当前时间设置赋值到 `lastTime`
   */
  getDelta () {
    let deltaTime = 0;
    if (this.running && !this._start) {
      this.start();
      return 0;
    }
    if (this._start) {
      const time = now();
      deltaTime = (time - this.lastTime) / 1000;
      this.lastTime = time;
      this.elapsedTime = this.elapsedTime + deltaTime;
    }
    return deltaTime;
  }
}
