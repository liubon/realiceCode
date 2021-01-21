function bsearch(arr, value) {
  let low = 0;
  let hight = arr.length - 1;
  while (low <= hight) {
    let mid = low + ((hight - low) >> 1);
    if (arr[mid] >= value) {
      if (mid == 0 || arr[mid - 1] < value) {
        return mid;
      } else {
        hight = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
function bsearchMin(arr, value) {
  let low = 0;
  let hight = arr.length - 1;
  while (low <= hight) {
    let mid = low + ((hight - low) >> 1);
    if (arr[mid] <= value) {
      if (mid == arr.length - 1 || arr[mid + 1] > value) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      hight = mid - 1;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 5, 7, 9, 24, 25, 34, 45, 68];
const res = bsearchMin(arr, 9);

console.log('res', arr[res]);
