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

  constructor() {
    this.head = null
  }
}