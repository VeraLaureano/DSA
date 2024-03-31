// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Definición de una estructura Queue (cola)
struct Queue {
  struct Nodo* primero; // Puntero al primer nodo de la cola
  struct Nodo* ultimo; // Puntero al último nodo de la cola
};

// Función para eliminar el primer elemento de la cola (dequeue)
void deQueue(struct Queue** cola) {
  // Si la cola está vacía, no hacemos nada
  if ((*cola)->primero == NULL) 
    return;

  // Guardamos el primer nodo a borrar
  struct Nodo* borrar = (*cola)->primero;

  // Actualizamos el puntero al primer nodo para que apunte al siguiente
  (*cola)->primero = borrar->siguiente;

  // Liberamos la memoria del nodo borrado
  free(borrar);

  // Si después de borrar el primer nodo la cola queda vacía, también actualizamos el puntero al último nodo
  if ((*cola)->primero == NULL)
    (*cola)->ultimo = NULL;
}
