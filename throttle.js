// 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(func, wait) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

<<<<<<< HEAD
d;
=======
function throttle(fn, wait) {
  const timer = null;
  return function (...args) {
    if (timer) return;
    setTimeout(() => {
      fn.apply(args);
      timer = null;
    }, wait);
  };
}
>>>>>>> 72bea1234f03b9a21df73241e79f5dda93f91439
