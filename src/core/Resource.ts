import { uid } from '../utils';
import type { WithUndef } from '../types';

import Base from './Base';
import Renderer from './Renderer';

const ERR_RESOURCE_METHOD_UNDEFINED = 'Resource subclass must define virtual methods';

export interface ResourceOptions {
  id: string;
  name: string;
  handle: any;
  userData: any;
}

export default class Resource<T extends ResourceOptions> extends Base {
  private _handle: any;

  private _lastHandle: any;

  id: string;

  name: WithUndef<string>;

  userData: any;

  // Only meaningful for resources that allocate GPU memory
  byteLength: number;

  options: Partial<T>;

  constructor(renderer: Renderer, options: Partial<T> = {}) {
    super(renderer);
    this.id = options?.id || uid(this.constructor.name);
    this.name = options?.name;
    this.userData = options?.userData;
    this._handle = options?.handle;

    this.options = options;
    if (this._handle === undefined) {
      this._handle = this.createHandle();
    }

    this.byteLength = 0;
  }

  get handle() {
    return this._handle;
  }

  /**
   * 交换为新的 `handle`（一般我们会用在虚拟 webgl 环境中）
   * @param handle
   */
  swapHandle(handle) {
    this._lastHandle = this._handle;
    this._handle = handle;
  }

  /**
   * 恢复为原有 `handle`
   */
  restoreHandle() {
    this._handle = this._lastHandle;
  }

  /**
   * 销毁相关资源
   */
  destroy(): void {
    this.delete();
  }

  delete({ deleteChildren = false } = {}) {
    // Delete this object, and get refs to any children
    // @ts-expect-error
    const children = this.handle && this.deleteHandle(this.handle);
    if (this.handle) {
      this.removeStats();
    }
    this._handle = null;

    // Optionally, recursively delete the children
    if (children && deleteChildren) {
      children.filter(Boolean).forEach((child) => child.delete());
    }

    return this;
  }

  bind(funcOrHandle = this.handle) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  unbind() {
    this.bind(null);
  }

  removeStats() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  createHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  deleteHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  toString(): string {
    return `${this.constructor.name}(${this.id})`;
  }
}
