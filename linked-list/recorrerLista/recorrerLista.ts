// Importamos la definición de la lista enlazada desde "../type"
import { LinkedList } from "../type";

// Función para recorrer una lista enlazada e imprimir sus datos
export const recorrerLista = (l: LinkedList) => {
  while (l.head !== null) {
    // hacer algo con los datos
    console.log(l.head.data); // Imprimimos el valor del campo 'data' del nodo actual
    l.head = l.head.next; // Avanzamos al siguiente nodo
  }
}
