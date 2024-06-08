import {readdirSync, statSync} from "node:fs";
import { DoublyLinkedList } from "./doublyLinkedList";
import path = require("node:path");

class Queue<T> {
  q: DoublyLinkedList<T>;
  constructor() {
   this.q = new DoublyLinkedList(); 
  }
  enqueue(data: T) {
    this.q.insertAtBack(data);
  }
  dequeue() {
    return this.q.popFront();
  }
  readAll() {
    let currentIndex = 0;
    let resultArray = [];
    while (true) {
      let result = this.q.read(currentIndex);
      if (result == null) {
        break;
      }
      resultArray.push(result);
      currentIndex++;
    }
    console.log(resultArray);
  }
}

function breadthFirstSearch(needle: string): string | undefined {
  let bfsQueue: Queue<string> = new Queue();
  let startingPoint = "node_modules";
  let visited_vertices = new Map<string, boolean>
  readdirSync(path.resolve(startingPoint)).map(dir=> {
    bfsQueue.enqueue(path.resolve(startingPoint, dir));
  })
  while (true) {
    let currentDir = bfsQueue.dequeue();
    if (currentDir == null) {
      return;
    } 
    if (path.basename(currentDir).charAt(0) === ".") {
      continue;
    }
    if (visited_vertices.get(currentDir)) {
      continue;
    }
    if (path.basename(currentDir).match(needle)) {
      console.log(currentDir)
    }
    visited_vertices.set(currentDir, true);
    let dirContent = readdirSync(currentDir);
    for (let dir of dirContent) {
    if (path.basename(dir).match(needle)) {
      console.log(path.resolve(currentDir, dir));
    }
      let fileStat= statSync(path.resolve(currentDir,dir));
      if (fileStat.isFile()){
        continue
      }
      bfsQueue.enqueue(path.resolve(currentDir, dir));
    } 
  }
}
breadthFirstSearch("CHANGELOG");
