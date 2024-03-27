struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct queue {
  struct Nodo *primero, *ultimo;
};

int peek(struct queue* cola) {
  if (cola->primero == NULL) {
    return -1;
  }

  return cola->primero->dato;
}