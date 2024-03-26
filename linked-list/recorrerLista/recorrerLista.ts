import { LinkedList } from "../type";

export const recorrerLista = (l: LinkedList) => {
  while (l.head !== null) {
    // hacer algo con los datos
    console.log(l.head.data);
    l.head = l.head.next
  }
}