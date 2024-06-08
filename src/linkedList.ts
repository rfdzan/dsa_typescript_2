export {LinkedList, Node, NodeType};
type NodeType<T> = Node<T> | null | undefined;

class LinkedList<T> {
  firstNode: NodeType<T>;
  constructor(node: Node<T>) {
    this.firstNode = node;
  }
  read(index: number): T | undefined {
    let currentNode: NodeType<T> = this.firstNode;
    let currentIndex = 0;
    // this is how a typical iteration through all nodes will look like.
    // we keep track of two things:
    // - The current node, which is updated in each loop.
    // - the index, which is incremented.
    while (currentIndex < index) {
      if (currentNode == null) {
        break;
      }
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    return currentNode?.content;
  }
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
  insertNode(at: number, data: T) {
    const newNode = new Node(data);
    // constant time for insertions at the beginning
    if (at === 0) {
      newNode.addNextNode(this.firstNode);
      this.firstNode = newNode;
      return;
    }
    let currentNode: NodeType<T> = this.firstNode;
    let currentIndex = 0;
    // going through the linked list to reach position
    // right before the requested index
    while (currentIndex < at - 1) {
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    newNode.nextNode = currentNode?.nextNode;
    if (currentNode == null) {
      return;
    }
    currentNode.nextNode = newNode;
  }
  deleteNode(at: number) {
    if (at === 0) {
      this.firstNode = this.firstNode?.nextNode;
      return;
    }
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < at - 1) {
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    if (currentNode == null) {
      return;
    }
    // a little weird? but nonetheless works.
    currentNode.nextNode = currentNode?.nextNode?.nextNode;
    return;
  }
}
class Node<T> {
  data: T;
  nextNode: NodeType<T>;
  previousNode: NodeType<T>;
  constructor(data: T) {
    this.data = data;
    this.nextNode = null;
    this.previousNode = null;
  }
  get content(): T {
    return this.data;
  }
  addNextNode(node: NodeType<T>) {
    this.nextNode = node;
  }
  addPreviousNode(node: NodeType<T>) {
    this.previousNode = node;
  }
}
function main() {
  const stringArr = ['once', 'upon', 'a', 'time'];
  const nodeArr: Node<string>[] = [];
  stringArr.forEach(str => nodeArr.push(new Node(str)));
  // this for block mutates members of nodeArr
  for (const [idx, node] of nodeArr.entries()) {
    if (idx === nodeArr.length - 1) {
      break;
    }
    node.addNextNode(nodeArr[idx + 1]);
  }
  const firstNode = nodeArr[0];
  const linkedList = new LinkedList(firstNode);
  console.log(linkedList.read(3));
  console.log(linkedList.indexOf('bob'));
  linkedList.insertNode(3, 'long');
  for (let i = 0; i < 5; i++) {
    console.log(linkedList.read(i));
  }
  linkedList.deleteNode(3);
  for (let i = 0; i < 5; i++) {
    console.log(linkedList.read(i));
  }
}
