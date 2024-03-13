import { LinkedList, Node } from '../type'

export class LinkedListWithInsertB extends LinkedList {
  insertAtTheBeginning(data: number): void {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }
}