// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Declaración de una variable global llamada 'stack' que apunta al primer nodo (inicialmente NULL)
struct Nodo* stack = NULL;

// Función para crear un nuevo nodo con el valor 'dato'
struct Nodo* crearNodo(int dato) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo)); // Asignamos memoria para el nuevo nodo

  nuevoNodo->dato = dato; // Asignamos el valor 'dato' al campo 'dato' del nodo
  nuevoNodo->siguiente = NULL; // Establecemos el siguiente nodo como NULL (fin de la lista)

  return nuevoNodo; // Devolvemos el puntero al nuevo nodo creado
}
