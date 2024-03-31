// Importamos la definición de la lista enlazada desde "../type"
import { LinkedList } from "../type";

// Función para eliminar un elemento de la lista
export const borrarElemento = (l: LinkedList, del: number): LinkedList => {
  let act: LinkedList = l; // Inicializamos el nodo actual con la cabeza de la lista

  // Buscamos el nodo con el valor 'del' en la lista
  while (act.head !== null && act.head.data !== del) {
    l = act; // Guardamos el nodo actual como el nodo anterior
    act.head = act.head.next; // Avanzamos al siguiente nodo
  }

  // Si encontramos el nodo con el valor 'del'
  if (act.head !== null) {
    // Verificamos si es el primer nodo de la lista
    if (act === l)
      l.head = act.head.next; // Si es el primero, actualizamos la cabeza de la lista
    else if (l.head !== null)
      l.head.next = act.head.next; // Si no es el primero, enlazamos el nodo anterior con el siguiente
  }

  return l; // Devolvemos la lista modificada
}
