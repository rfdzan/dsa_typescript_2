import { bubbleSort } from "../src/bubble_sort";
import { selectionSort } from "../src/selection_sort";
import {expect, test} from '@jest/globals';
import { LinkedList, Node } from "../src/linkedList";

test('Tests Bubble Sort', () => {
  expect(bubbleSort([4, 3, 2, 7, 1])).toStrictEqual([1, 2, 3, 4, 7])
})
test('Tests Selection Sort', () => {
  expect(selectionSort([4, 3, 2, 7, 1])).toStrictEqual([1, 2, 3, 4, 7])
})
test('Tests Linked List', () => {
  let stringArr = ["once", "upon", "a", "time"];
  let nodeArr: Node<string>[] = [];
  stringArr.forEach((str) => nodeArr.push(new Node(str)));
  // this for block mutates members of nodeArr
  for (const [idx, node] of nodeArr.entries()) {
    if (idx === nodeArr.length - 1) {
      break;
    } 
    node.addNode(nodeArr[idx + 1]);
  }
  let firstNode = nodeArr[0];
  let linkedList = new LinkedList(firstNode);
  expect(linkedList.read(3)).toBe("time");
  expect(linkedList.indexOf("bob")).toBe(null);
  linkedList.insertNode(3, "long");
  expect(linkedList.read(3)).toBe("long");
  linkedList.deleteNode(3);
  expect(linkedList.read(3)).toBe("time");
})
