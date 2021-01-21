const arr = [];

function agent(target, handler) {
  return new Proxy(target, handler);
}
const observe = agent(arr, {
  set: function (target, fn, value) {
    return true;
  },
  get: function () {
    console.log("get");
    return true;
  },
});
observe.push(1, 2, 3);
