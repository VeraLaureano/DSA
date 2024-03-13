export class Node {
  data: number
  next: Node | null

  constructor (data: number) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  head: Node | null
  insertAtTheBegining: (data: number) => void
  
  constructor() {
    this.head = null
  }
}