struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

int peek(struct Queue** cola) {
  if ((*cola)->primero == NULL) {
    return -1;
  }

  return cola->primero->dato;
}