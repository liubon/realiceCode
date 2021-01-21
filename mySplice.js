Array.prototype.mySplic = function (s, l, c) {
  console.log(this);
  s = s || 0;
  l = l || this.length;
  let newArray = [];
  let modify = [];
  if (C) {
    if (l == 0) {
    } else {
      for (let i = s; i < s + l; i++) {
        newArray.push(this[i]);
        this[i] = c;
      }
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      if (i >= s && i < i + s) {
        newArray.push(this[i]);
      } else {
      }
    }
  }

  return newArray;
};
const arr = [1, 2, 3, 4];
// arr.mySplic();
