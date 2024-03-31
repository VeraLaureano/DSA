// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Declaración de una variable global llamada 'stack' que apunta al primer nodo (inicialmente NULL)
struct Nodo* stack = NULL;

// Función para agregar un elemento al principio de la pila (operación push)
void push(struct Nodo** stack, int dato) {
  // Creamos un nuevo nodo con el valor 'dato'
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo));
  
  nuevoNodo->dato = dato; // Asignamos el valor 'dato' al campo 'dato' del nodo
  nuevoNodo->siguiente = *stack; // Enlazamos el nuevo nodo con el nodo actual (anterior cabeza de la pila)
  *stack = nuevoNodo; // El nuevo nodo se convierte en la nueva cabeza de la pila
}
