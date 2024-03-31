// Importamos la definición de la lista enlazada y el nodo desde '../type'
import { LinkedList, Node } from '../type';

// Clase que extiende la lista enlazada con un método para insertar al principio
export class LinkedListWithInsertB extends LinkedList {
  insertAtTheBeginning(data: number): void {
    const newNode = new Node(data); // Creamos un nuevo nodo con el valor 'data'
    newNode.next = this.head; // Enlazamos el nuevo nodo con la cabeza actual
    this.head = newNode; // El nuevo nodo se convierte en la nueva cabeza de la lista
  }
}
