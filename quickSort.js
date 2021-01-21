function quickSort(arr, left, right) {
  if (left < right) {
    let p = left - 1;
    let m = arr[right];
    for (let i = left; i <= right; i++) {
      if (arr[i] <= m) {
        p++;
        let tem = arr[p];
        arr[p] = arr[i];
        arr[i] = tem;
      }
    }
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
  return arr;
}

var arr = [5, 1, 4, 2, 3];
var start = 0;
var end = arr.length - 1;
let res = quickSort(arr, start, end);
console.log(res);

function quickSort(arr, left, right) {
  if (left < right) {
    let p = left - 1;
    let m = arr[right];
    for (let i = left; i <= right; i++) {
      if (arr[i] <= m) {
        p++;
        let temp = arr[i];
        arr[i] = arr[p];
        arr[p] = temp;
      }
    }
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
    return arr;
  }
}
