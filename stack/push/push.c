struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

void push(struct Nodo* stack, int dato) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo));
  nuevoNodo->dato = dato;
  nuevoNodo->siguiente = stack;
  stack = nuevoNodo;
}
