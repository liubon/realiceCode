const PENDING = 'pinding';
const FULFILLED = 'fulfilled';
const REJECTED = ' rejected';
class MyPromise {
  constructor(executor) {
    this._status = PENDING;
    this._value = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];

    let _resolve = (val) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;

        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(val);
        }
      };
      setTimeout(run);
    };
    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
      };
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.unshift();
        callback(val);
      }
      setTimeout(run);
    };
    executor(_resolve, _reject);
  }
  then(reslveFn, rejectFn) {
    if (typeof reslveFn !== 'function') {
      reslveFn = (val) => val;
    }
    if (typeof rejectFn !== 'function') {
      reslveFn = (reason) => {
        throw new Error(reason instanceof Error ? reason.message : reason);
      };
    }
    return new MyPromise((resolve,reject)=>{
        const 
    });

  }
}
