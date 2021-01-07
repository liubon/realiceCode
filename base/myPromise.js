const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(exector) {
    this._status = PENDING;
    this._value = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];
    const resolve = (val) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
        while (this._resolveQueue.length) {
          const res = this._resolveQueue.unshift();
          res(val);
        }
      };
      setTimeout(run);
    };
    const reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) {
          this._status = FULFILLED;
          this._value = val;
          while (this._rejectQueue.length) {
            const rej = this._resolveQueue.unshift();
            rej(val);
          }
        }
      };
      setTimeout(run);
    };
    exector(resolve, reject);
  }
  then(resolve, reject) {
    if (typeof resolveFn !== 'function') {
      resolveFn = (val) => val;
    }
    if (typeof rejectFn !== 'function') {
      rejectFn = (reason) => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      };
    }
    return new MyPromise((resolveFn, rejectFn) => {
      const resolved = (val) => {
        try {
          const result = resolve(val);
          result instanceof MyPromise
            ? result.then(resolveFn, rejectFn)
            : resolveFn(result);
        } catch (error) {
          rejectFn(error);
        }
      };
      const rejected = (val) => {
        try {
          const result = reject(val);
          result instanceof MyPromise
            ? result.then(resolveFn, rejectFn)
            : resolveFn(result);
        } catch (error) {
          rejectFn(error);
        }
      };
      switch (this._status) {
        case PENDING:
          this._resolveQueue.push(resolved);
          this._rejectQueue.push(rejected);
          break;

        case FULFILLED:
          resolved(this._value);
          break;
        case REJECTED:
          rejected(this._value);
          break;
      }
    });
  }
  catch(rejected) {
    this.then(undefined, reject);
  }
  finally(callback) {
    this.then(
      callback instanceof MyPromise
        ? callback
        : MyPromise.resolve(callback()).then((val) => val)
    );
  }
}
