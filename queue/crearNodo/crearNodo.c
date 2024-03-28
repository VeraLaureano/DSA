struct Nodo {
  int dato;
  struct Nodo* siguiente;
};

struct Queue {
  struct Nodo *primero, *ultimo;
};

struct Nodo* crearNodo(int data) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo));

  nuevoNodo->dato = data;
  nuevoNodo->siguiente = NULL;

  return nuevoNodo;
}