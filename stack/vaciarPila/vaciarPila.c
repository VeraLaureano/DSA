struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

void vaciarPila(struct Nodo* stack) {
  while (stack != NULL) {
    struct Nodo* temp = stack;
    stack = stack->siguiente;
    free(temp);
  }
}