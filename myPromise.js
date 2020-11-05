const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this._status = PENDING;
    this._value = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];

    const _resolve = (value) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._value = value;
        this._status = FULFILLED;
        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(value);
        }
      };
      setTimeout(run);
    };
    const _reject = (value) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._value = value;
        this._status = FULFILLED;
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift();
          callback(value);
        }
      };
      setTimeout(run);
    };
    executor(_resolve, _reject);
  }
  then(resolve, reject) {
    if (typeof resolve !== 'function') {
      resolve = (val) => val;
    }
    if (typeof reject !== 'function') {
      reject = (reason) => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      };
    }
    return new MyPromise((resFn, rejFn) => {
      const resolved = (val) => {
        try {
          const res = resolve(val);
          res instanceof MyPromise ? res.then(resFn, rejFn) : resFn(res);
        } catch (err) {
          rejFn(err);
        }
      };
      const rejected = (val) => {
        try {
          const res = reject(val);
          res instanceof MyPromise ? res.then(resFn, rejFn) : resFn(res);
        } catch (error) {
          rejFn(error);
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
  catch(rejectFn) {
    return this.then(undefined, rejected);
  }
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then((value) => value),
      (reason) =>
        MyPromise.resolve(callback()).then((reason) => {
          throw reason;
        })
    );
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new MyPromise((resolve, rejecet) => {
      rejecet(reason);
    });
  }
}
