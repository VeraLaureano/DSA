// Definición de una estructura Nodo
struct Nodo {
  int dato; // Valor almacenado en el nodo
  struct Nodo* siguiente; // Puntero al siguiente nodo
};

// Declaración de una variable global llamada 'stack' que apunta al primer nodo (inicialmente NULL)
struct Nodo* stack = NULL;

// Función para obtener el valor almacenado en el nodo superior de la pila
void leerSuperior(struct Nodo** stack) {
  // Si el puntero a la pila no es NULL
  if (stack != NULL) {
    // Retornamos el valor almacenado en el primer nodo (superior de la pila)
    return (*stack)->dato;
  }
}
