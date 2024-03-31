// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Declaración de una variable global llamada 'stack' que apunta al primer nodo (inicialmente NULL)
struct Nodo* stack = NULL;

// Función para verificar si la pila está vacía
int estaVacia(struct Nodo** stack) {
  // Si el puntero al primer nodo (stack) es NULL, la pila está vacía
  return ((*stack) == NULL);
}