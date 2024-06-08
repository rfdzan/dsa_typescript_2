export {DoublyLinkedList};
import {Node, NodeType} from './linkedList';
/**Between linked list and doubly linked list, the only difference seems to be the insertion and deletion on doubly-linked list are constant time? reading and searching are both still O(N) and methods for both are interchangeable. */
class DoublyLinkedList<T> {
  firstNode: NodeType<T>;
  endNode: NodeType<T>;
  constructor(firstNode: NodeType<T> = null, endNode: NodeType<T> = null) {
    this.firstNode = firstNode;
    this.endNode = endNode;
  }
  /**copy pasted from linked list*/
  indexOf(needle: T): number | null {
    let currentNode: NodeType<T> = this.firstNode;
    let currentIndex = 0;
    while (true) {
      if (currentNode?.content === needle) {
        return currentIndex;
      }
      if (currentNode == null) {
        return null;
      }
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
  }
  /**copy pasted from linked list*/
  read(at: number): T | undefined {
    let currentNode: NodeType<T> = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < at) {
      if (currentNode == null) {
        break;
      }
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    return currentNode?.content;
  }
  insertAtFront(data: T) {
    const newNode = new Node(data);
    if (this.firstNode == null) {
      this.firstNode = newNode;
      this.endNode = newNode;
      return;
    }
    newNode.addNextNode(this.firstNode);
    this.firstNode.addPreviousNode(newNode);
    this.firstNode = newNode;
  }
  insertAtBack(data: T) {
    const newNode = new Node(data);
    if (this.firstNode == null) {
      this.firstNode = newNode;
      this.endNode = newNode;
      return;
    }
    this.endNode?.addNextNode(newNode);
    newNode.addPreviousNode(this.endNode);
    this.endNode = newNode;
  }
  popFront(): T | undefined {
    const popped = this.firstNode?.content;
    this.firstNode = this.firstNode?.nextNode;
    this.firstNode?.addPreviousNode(null);
    return popped;
  }
  popBack(): T | undefined {
    const popped = this.endNode?.content;
    this.endNode = this.endNode?.previousNode;
    this.endNode?.addNextNode(null);
    return popped;
  }
}
function main() {
  const doublyLinkedList = new DoublyLinkedList();
  const stringArr = ['once', 'upon', 'a', 'time'];
  for (const str of stringArr) {
    doublyLinkedList.insertAtBack(str);
  }
  console.log(`this should be 'once': ${doublyLinkedList.popFront()}`);
  console.log(`this should be 'time': ${doublyLinkedList.popBack()}`);
  console.log(doublyLinkedList.read(0));
  console.log(doublyLinkedList.read(1));
}
