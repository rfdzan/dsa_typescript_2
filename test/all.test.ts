import { bubbleSort } from "../src/bubble_sort";
import { selectionSort } from "../src/selection_sort";
import {expect, test} from '@jest/globals';

test('Tests Bubble Sort', () => {
  expect(bubbleSort([4, 3, 2, 7, 1])).toStrictEqual([1, 2, 3, 4, 7])
})
test('Tests Selection Sort', () => {
  expect(selectionSort([4, 3, 2, 7, 1])).toStrictEqual([1, 2, 3, 4, 7])
})
