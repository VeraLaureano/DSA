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

// Función para crear una nueva cola
struct Queue* crearCola() {
  // Asignamos memoria para la cola
  struct Queue* cola = (struct Queue*)malloc(sizeof(struct Queue));

  // Inicializamos los punteros de la cola como NULL (cola vacía)
  cola->primero = cola->ultimo = NULL;

  return cola; // Devolvemos la cola creada
}
