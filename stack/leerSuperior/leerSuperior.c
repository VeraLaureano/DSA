struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

int leerSuperior(struct Nodo* stack) {
  if (stack != NULL) {
    return stack->dato;
  }
  return -1;
}