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

// Función para crear un nuevo nodo con el valor 'data'
struct Nodo* crearNodo(int data) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo)); // Asignamos memoria para el nuevo nodo

  nuevoNodo->dato = data; // Asignamos el valor 'data' al campo 'dato' del nodo
  nuevoNodo->siguiente = NULL; // Establecemos el siguiente nodo como NULL (fin de la lista)

  return nuevoNodo; // Devolvemos el puntero al nuevo nodo creado
}
