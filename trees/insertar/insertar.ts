// Importamos la función crearNodo y el tipo Arbol desde sus respectivos archivos
import { crearNodo } from '../crearNodo/crearNodo'
import { Arbol } from '../type'

// Definimos una función llamada insertarEnArbol que toma un nodo (de tipo Arbol o nulo) y un valor numérico como argumentos
export const insertarEnArbol = (nodo: Arbol | null, valor: number): Arbol => {
  // Si el nodo es nulo, creamos un nuevo nodo con el valor proporcionado y lo devolvemos
  if (nodo === null) {
    return crearNodo(valor)
  }

  // Si el valor es menor que el valor del nodo actual, lo insertamos en el subárbol izquierdo
  if (valor < nodo.valor) {
    nodo.izquierdo = insertarEnArbol(nodo.izquierdo, valor)
  } else if (valor > nodo.valor) {
    // Si el valor es mayor que el valor del nodo actual, lo insertamos en el subárbol derecho
    nodo.derecho = insertarEnArbol(nodo.derecho, valor)
  }

  // Devolvemos el nodo actual (con las modificaciones si se realizaron)
  return nodo
}
