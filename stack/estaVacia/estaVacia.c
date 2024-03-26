struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

int estaVacia(struct Nodo* stack) {
  return (stack == NULL)
}