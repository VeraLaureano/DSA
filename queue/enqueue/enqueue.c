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

// Función para agregar un elemento al final de la cola (enqueue)
void enQueue(struct Queue** cola, int dato) {
  struct Nodo* nuevoNodo = crearNodo(dato); // Creamos un nuevo nodo con el valor 'dato'

  // Si la cola está vacía, el nuevo nodo se convierte en la cabeza y la cola
  if ((*cola)->ultimo == NULL) {
    (*cola)->primero = (*cola)->ultimo = nuevoNodo;
  } 
  else {
    // Enlazamos el último nodo existente con el nuevo nodo
    (*cola)->ultimo->siguiente = nuevoNodo;
    // Actualizamos el puntero al último nodo para que apunte al nuevo nodo
    (*cola)->ultimo = nuevoNodo;
  }
}
