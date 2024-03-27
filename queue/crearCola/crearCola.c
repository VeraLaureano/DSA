struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct queue {
  struct Nodo *primero, *ultimo;
};


struct queue* crearCola() {
  struct queue* cola = (struct queue*)malloc(sizeof(struct queue));

  cola->primero = cola->ultimo = NULL;
  return cola;
}

