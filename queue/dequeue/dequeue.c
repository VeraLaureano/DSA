struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

void deQueue(struct Queue** cola) {
  if ((*cola)->primero == NULL) 
    return;

  struct Nodo* borrar = (*cola)->primero;
  (*cola)->primero = borrar->siguiente;
  free(borrar);

  if ((*cola)->primero == NULL)
    (*cola)->ultimo = NULL;
}