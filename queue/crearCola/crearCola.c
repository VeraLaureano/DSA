struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

struct Queue* crearCola() {
  struct Queue* cola = (struct Queue*)malloc(sizeof(struct Queue));

  cola->primero = cola->ultimo = NULL;
  return cola;
}

