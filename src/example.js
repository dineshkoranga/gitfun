function bubbleSort(arr) {
  var len = arr.length,
    temp,
    i;
  for (i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [3, 1, 2, 4, 5, 6];

console.log(bubbleSort(arr));

function binarySearch(arr, item) {
  var low = 0,
    high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 5));
