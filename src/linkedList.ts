export {LinkedList, Node};
type NextNodeType<T> = Node<T> | null | undefined;

class LinkedList<T> {
  firstNode: NextNodeType<T>
  constructor(node: Node<T>) {
    this.firstNode = node
  }
  read(index: number): T | undefined {
    let currentNode: NextNodeType<T> = this.firstNode;
    let currentIndex = 0;
    // this is how a typical iteration through all nodes will look like.
    // we keep track of two things:
    // - The current node, which is updated in each loop.
    // - the index, which is incremented.
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
  deleteNode(at: number) {
    if (at === 0) {
      this.firstNode = this.firstNode?.nextNode;
      return;
    }
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex< (at -1)) {
      currentNode = currentNode?.nextNode;
      currentIndex++;
    }
    if (currentNode==null) {
      return;
    } 
    // a little weird? but nonetheless works.
    currentNode.nextNode = currentNode?.nextNode?.nextNode;
    return;
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
  addNode(node: NextNodeType<T>) {
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
  linkedList.deleteNode(3);
  for (let i = 0; i<5; i++) {
    console.log(linkedList.read(i));
  }
}
main(); 
