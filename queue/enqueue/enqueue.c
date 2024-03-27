struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct queue {
  struct Nodo *primero, *ultimo;
};

void enqueue(struct queue* cola, int dato) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo));

  nuevoNodo->dato = dato;
  nuevoNodo->siguiente = NULL;

  if (cola->ultimo == NULL) {
    cola->primero = nuevoNodo;
    cola->ultimo = nuevoNodo;
  } 
  else {
    cola->ultimo->siguiente = nuevoNodo;
    cola->ultimo = nuevoNodo;
  }
}