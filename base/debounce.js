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

function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(tiemr);
    timer = setTimeout(() => {
      fn.apply(args);
    }, wait);
  };
}
