// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Declaración de una variable global llamada 'stack' que apunta al primer nodo (inicialmente NULL)
struct Nodo* stack = NULL;

// Función para vaciar la pila (eliminar todos los nodos)
void vaciarPila(struct Nodo** stack) {
  // Mientras el puntero a la pila no sea NULL
  while (stack != NULL) {
    // Guardamos el puntero al primer nodo a borrar
    struct Nodo* temp = *stack;

    // Actualizamos el puntero al primer nodo para que apunte al siguiente nodo
    *stack = (*stack)->siguiente;

    // Liberamos la memoria del nodo borrado
    free(temp);
  }
}
