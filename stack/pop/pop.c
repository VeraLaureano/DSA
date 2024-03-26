struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

void pop(struct Nodo* stack) {
  if (stack != NULL) {
    struct Nodo* temp = stack;
    stack = stack->siguiente;
    free(temp);
  }
}
