class LinkedList<T> {
  firstNode: Node<T> | null 
  constructor(node: Node<T>) {
    this.firstNode = node
  }
  read(index: number): T | undefined {
    let currentNode = this.firstNode;
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
    let currentNode = this.firstNode;
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
}
class Node<T> {
  data: T
  nextNode: Node<T> | null
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
  // this for block mutates nodeArr
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
  // nodeArr.forEach((node) => console.log(node.nextNode));
}
main();
