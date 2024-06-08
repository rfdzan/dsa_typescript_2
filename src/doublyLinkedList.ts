import { Node, NodeType } from "./linkedList";
class DoublyLinkedListi<T> {
  firstNode: NodeType<T>
  endNode: NodeType<T>
  constructor(firstNode: NodeType<T>, endNode: NodeType<T>) {
    this.firstNode= firstNode;
    this.endNode = endNode;
  }
}
