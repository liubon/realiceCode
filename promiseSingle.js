class MyPromise {
  constructor(executor) {
    this._value = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];
    const _resolve = (value) => {
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(value);
      }
    };
    const _reject = (value) => {
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(value);
      }
    };
    executor(_resolve, _reject);
  }
  then(resolve, reject) {
    this._resolveQueue.push(resolve);
    this._rejectQueue.push(reject);
  }
}

const fn = new MyPromise((res, rej) => {
  setTimeout(() => {
    res('abcd');
  }, 2000);
});
fn.then((res) => {
  console.log(res);
})
  .then((res) => {
    console.log('1', res);
  })
  .then((res) => {
    console.log('2', res);
  });

// const p = new Promise((res, rej) => {
//   setTimeout(res('abcdefg'));
// });
// p.then((res) => {
//   console.log(res);
// })
//   .then((res) => {
//     console.log('1', res);
//   })
//   .then((res) => {
//     console.log('2', res);
//   });
