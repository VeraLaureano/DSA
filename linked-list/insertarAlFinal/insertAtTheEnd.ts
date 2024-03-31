// Importamos la definición de la lista enlazada y el nodo desde '../type'
import { LinkedList, Node } from '../type';

// Clase que extiende la lista enlazada con un método para insertar al final
export class LinkedListWithInsertE extends LinkedList {
  insertAtTheEnd(data: number): void {
    const newNode = new Node(data); // Creamos un nuevo nodo con el valor 'data'

    if (!this.head)
      this.head = newNode; // Si la lista está vacía, el nuevo nodo es la cabeza
    else {
      let current = this.head; // Comenzamos desde la cabeza de la lista

      // Recorremos la lista hasta llegar al último nodo
      while (current.next) {
        current = current.next; // Avanzamos al siguiente nodo
      }

      current.next = newNode; // Enlazamos el último nodo existente con el nuevo nodo
    }
  }
}
