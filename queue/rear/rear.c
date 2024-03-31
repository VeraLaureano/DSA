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

// Función para obtener el elemento en la parte trasera de la cola (rear)
int rear(struct Queue** cola) {
  // Si la cola está vacía, retornamos un valor especial (-1)
  if ((*cola)->ultimo == NULL)
    return -1;

  // Retornamos el valor almacenado en el último nodo (parte trasera de la cola)
  return (*cola)->ultimo->dato;
}
