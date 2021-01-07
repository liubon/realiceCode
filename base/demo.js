const handler = {
  set: function (target, key, value) {
    console.log('arr', target, 'key', key, 'value', value);
    // this = arr;
    target[key] = value;
    return true;
  },
};

const p = new Proxy({}, handler);
p.arr = [1, 2, 3];
console.log(p.arr);
