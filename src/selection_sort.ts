export {selectionSort};
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // assume the starting point is always the smallest.
    let indexOfSmallestNumber = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfSmallestNumber]) {
        indexOfSmallestNumber = j;
      }
    }
    // swap happens if the index changes.
    if (indexOfSmallestNumber !== i) {
      const tempValue = arr[i];
      arr[i] = arr[indexOfSmallestNumber];
      arr[indexOfSmallestNumber] = tempValue;
    }
  }
  return arr;
}
selectionSort([2, 6, 1, 3]);
selectionSort([4, 3, 2, 7, 1]);
