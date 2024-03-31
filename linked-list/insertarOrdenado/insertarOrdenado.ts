// Importamos la definición de la lista enlazada y el nodo desde '../type'
import { LinkedList, Node } from "../type";

// Función para insertar un elemento de manera ordenada en una lista enlazada
export const insertarOrdenado = async (l: LinkedList, data: number): Promise<LinkedList> => {
  const newNode = new Node(data); // Creamos un nuevo nodo con el valor 'data'
  let aux: LinkedList = l; // Creamos una variable auxiliar para rastrear la lista

  // Si la lista está vacía, el nuevo nodo se convierte en la cabeza
  if (!l.head) {
    l.head = newNode;
  } else {
    // Buscamos la posición adecuada para insertar el nuevo nodo
    while (l.head !== null && data > l.head.data) {
      aux.head = l.head; // Guardamos el nodo actual como el nodo anterior
      l.head = l.head.next; // Avanzamos al siguiente nodo
    }

    // Si el nuevo nodo debe ser el primero en la lista
    if (aux === l) {
      newNode.next = l.head; // Enlazamos el nuevo nodo con la lista existente
      l.head = newNode; // El nuevo nodo se convierte en la nueva cabeza de la lista
    } else {
      if (aux.head) {
        aux.head.next = newNode; // Enlazamos el nodo anterior con el nuevo nodo
        newNode.next = l.head; // Enlazamos el nuevo nodo con el nodo actual
      }
    }
  }

  return aux; // Devolvemos la lista modificada
};
