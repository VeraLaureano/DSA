import { LinkedList } from "../type";

export const buscar = (l: LinkedList, n: number) => {
  let encontre: boolean = false
  while (l.head !== null && !encontre) {
    if (l.head.data === n)
      encontre = true
    else 
      l.head = l.head.next
  }

  return encontre
}