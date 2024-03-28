struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

void enQueue(struct Queue** cola, int dato) {
  struct Nodo* nuevoNodo = crearNodo(dato);

  if ((*cola)->ultimo == NULL) {
    (*cola)->primero =(*cola)->ultimo = nuevoNodo;
  } 
  else {
    (*cola)->ultimo->siguiente = nuevoNodo;
    (*cola)->ultimo = nuevoNodo;
  }
}