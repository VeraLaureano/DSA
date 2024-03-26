import { LinkedList, Node } from '../type'

export class LinkedListWithInsertE extends LinkedList {
  insertAtTheEnd(data: number): void {
    const newNode = new Node(data)

    if (!this.head)
      this.head = newNode
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      } 
      current.next = newNode
    }
  }
}