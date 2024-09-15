function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let leftSubA = mergeSort(arr.slice(0, arr.length / 2));
  let rightSubA = mergeSort(arr.slice(arr.length / 2));
  let pl = 0;
  let pr = 0;
  let retval = [];
  while (pl < leftSubA.length && pr < rightSubA.length) {
    if (leftSubA[pl] <= rightSubA[pr]) {
      retval.push(leftSubA[pl++]);
    } else {
      retval.push(rightSubA[pr++]);
    }
  }
  while (pl < leftSubA.length) {
    retval.push(leftSubA[pl++]);
  }
  while (pr < rightSubA.length) {
    retval.push(rightSubA[pr++]);
  }
  return retval;
}
