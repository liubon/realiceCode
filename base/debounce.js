// 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

function debounce(func, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

<<<<<<< HEAD:debounce.js
function debounce(func, wait) {
  let timer = null;
  return function (...arg) {
    const self = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, arg);
=======
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(tiemr);
    timer = setTimeout(() => {
      fn.apply(args);
>>>>>>> 72bea1234f03b9a21df73241e79f5dda93f91439:base/debounce.js
    }, wait);
  };
}
