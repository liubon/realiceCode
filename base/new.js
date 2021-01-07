function myNew(foo, ...args) {
  let obj = Object.create(foo.prototype);
  let result = foo.apply(obj, args);
  return Object.prototype.toString.call(result) === '[object Object]'
    ? result
    : obj;
}

function myNew(foo, ...args) {
  let object = Object.create(foo.prototype);
  const result = foo.apply(object, args);
  return Object.prototype.toString.call(result) == '[object Object]'
    ? result
    : object;
}
