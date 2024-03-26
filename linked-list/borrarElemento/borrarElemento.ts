import { LinkedList } from "../type";

export const borrarElemento = (l: LinkedList, del: number): LinkedList => {
  let act: LinkedList = l;

  while (act.head !== null && act.head.data !== del) {
    l = act;
    act.head = act.head.next
  }

  if (act.head !== null) {
    if (act === l)
      l.head = act.head.next
    else if (l.head !== null)
      l.head.next = act.head.next
  }

  return l
}