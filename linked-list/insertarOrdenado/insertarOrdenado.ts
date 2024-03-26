import { LinkedList, Node } from "../type";

export const insertarOrdenado = async (l: LinkedList, data: number): Promise<LinkedList> => {
  const newNode = new Node(data)
  let aux: LinkedList = l;

  if (!l.head) {
    l.head = newNode
  }
  else { 
    while (l.head !== null && data > l.head.data) {
      aux.head = l.head
      l.head = l.head.next
    }

    if (aux === l) {
      newNode.next = l.head
      l.head = newNode
    } 
    else {
      if (aux.head) {
        aux.head.next = newNode
        newNode.next = l.head
      }
    } 
  }

  return aux
}