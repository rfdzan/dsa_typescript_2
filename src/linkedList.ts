type NextNodeType<T> = Node<T> | null | undefined;

class LinkedList<T> {
  firstNode: Node<T> 
  constructor(node: Node<T>) {
    this.firstNode = node
  }
  read(index: number): T | undefined {
    let currentNode: NextNodeType<T> = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      if (currentNode == null) {
        break;
      }
      currentNode = currentNode?.nextNode 
      currentIndex++;
    }
    return currentNode?.content
  }
  indexOf(needle: T): number | null {
    let currentNode: NextNodeType<T> = this.firstNode;
    let currentIndex = 0;
    while (true) {
      if (currentNode?.content === needle) {
        return currentIndex
      }
      if (currentNode == null) {
        return null
      } 
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
  }
  insertNode(at: number, data: T) {
    let newNode = new Node(data);
    // constant time for insertions at the beginning
    if (at === 0) {
      newNode.addNode(this.firstNode)
      this.firstNode = newNode;
      return;
    }
    let currentNode: NextNodeType<T> = this.firstNode;
    let currentIndex = 0;
    // going through the linked list to reach position
    // right before the requested index
    while (currentIndex < (at - 1)) {
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    newNode.nextNode = currentNode?.nextNode;
    if (currentNode == null) {
      return;
    }
    currentNode.nextNode = newNode;
  }
}
class Node<T> {
  data: T
  nextNode: NextNodeType<T>
  constructor(data: T) {
    this.data = data;
    this.nextNode = null
  }
  get content(): T {
    return this.data;
  }
  addNode(node: Node<T>) {
    this.nextNode = node
  }
}
function main() {
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
  console.log(linkedList.read(3));
  console.log(linkedList.indexOf("bob"));
  linkedList.insertNode(3, "long");
  for (let i = 0; i<5; i++) {
    console.log(linkedList.read(i));
  }
}
main();
