struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct queue {
  struct Nodo *primero, *ultimo;
};

void dequeue(struct queue* cola) {
  if (cola->primero == NULL) {
    printf("La cola esta vacia.\n");
  }

  struct Nodo* temp = cola->primero;
  cola->primero = cola->primero->siguiente;
  free(temp);

  if (cola->primero == NULL) {
    cola->ultimo = NULL;
  }
}