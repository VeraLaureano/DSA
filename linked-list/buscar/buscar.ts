// Importamos la definición de la lista enlazada desde "../type"
import { LinkedList } from "../type";

// Función para buscar un elemento en una lista enlazada
export const buscar = (l: LinkedList, n: number) => {
  let encontre: boolean = false; // Variable para rastrear si se encontró el elemento

  // Buscamos el nodo con el valor 'n' en la lista
  while (l.head !== null && !encontre) {
    if (l.head.data === n)
      encontre = true; // Si encontramos el elemento, actualizamos la variable a verdadero
    else 
      l.head = l.head.next; // Avanzamos al siguiente nodo
  }

  return encontre; // Devolvemos el resultado de la búsqueda
}
