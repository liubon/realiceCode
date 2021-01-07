function bubbleSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;
  for (let i = 0; i < length; i++) {
    let flag = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

function insertionSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

//错的
function selectionSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;
  for (let i = 0; i < n; i++) {
    let min = arr[i],
      index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
      let tmp = arr[index];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //数组元素被划分到剩1个时，递归终止
  const midIndex = arr.length / 2 || 0;
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr)); //先划分，后合并
}

//合并
function merge(leftArr, rightArr) {
  const result = [];
  while (leftArr.length && rightArr.length) {
    leftArr[0] <= rightArr[0]
      ? result.push(leftArr.shift())
      : result.push(rightArr.shift());
  }
  while (leftArr.length) result.push(leftArr.shift());
  while (rightArr.length) result.push(rightArr.shift());
  return result;
}

const arr = [2, 5, 1, 7, 3, 24, 6, 4, 9];
const result = mergeSort(arr);
arr;
console.log(result);
