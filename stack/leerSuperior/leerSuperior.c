struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

void leerSuperior(struct Nodo** stack) {
  if (stack != NULL) {
    return (*stack)->dato;
  }
}