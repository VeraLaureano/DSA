struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

int rear (struct Queue** cola) {
  if ((*cola)->ultimo == NULL)
    return -1;

  return (*cola)->ultimo->dato;
}