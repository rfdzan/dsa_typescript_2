export {bubbleSort};
/**Bubbles the biggest value
towards the end of the array.
*/
function bubbleSort(arr: number[]) {
  let unsortedUntil = arr.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const tempValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempValue;
        sorted = false;
      }
    }
    unsortedUntil--;
  }
  return arr;
}
