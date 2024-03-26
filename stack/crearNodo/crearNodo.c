struct Nodo {
  int dato;
  struct Nodo* siguiente;
};
struct Nodo* stack = NULL;

struct Nodo* crearNodo(int dato) {
  struct Nodo* nuevoNodo = (struct Nodo*)malloc(sizeof(struct Nodo));
  
  nuevoNodo->dato = dato;
  nuevoNodo->siguiente = NULL;

  return nuevoNodo
}
