// Definimos una función llamada "borrarElemento" que toma un nodo (de tipo Arbol) como argumento,

import { Arbol } from "../type";

// así como un valor numérico "valor" que representa el elemento a borrar.
const borrarElemento = (nodo: Arbol | null, valor: number): void => {
  if (nodo) {
    if (valor < nodo.valor) {
      // Si el valor es menor que el valor del nodo actual, realizamos la búsqueda en el subárbol izquierdo
      borrarElemento(nodo.izquierdo, valor);
    } else if (valor > nodo.valor) {
      // Si el valor es mayor que el valor del nodo actual, realizamos la búsqueda en el subárbol derecho
      borrarElemento(nodo.derecho, valor);
    } else {
      // Si encontramos el nodo con el valor deseado:
      if (!nodo.izquierdo && !nodo.derecho) {
        // Si el nodo actual tiene ambos subárboles nulos, lo eliminamos y establecemos el nodo como nulo
        nodo = null;
      } else if (!nodo.izquierdo) {
        // Si el subárbol izquierdo es nulo, reemplazamos el nodo actual por su subárbol derecho
        nodo = nodo.derecho;
      } else if (!nodo.derecho) {
        // Si el subárbol derecho es nulo, reemplazamos el nodo actual por su subárbol izquierdo
        nodo = nodo.izquierdo;
      } else {
        // Si el nodo actual tiene ambos subárboles no nulos, encontramos el sucesor inmediato (mínimo) en el subárbol derecho
        let aux = nodo;
        nodo = nodo.derecho;
        while (aux.izquierdo) {
          aux = aux.izquierdo;
        }
        // Reemplazamos el valor del nodo actual por el valor del sucesor inmediato
        nodo.valor = aux.valor;
        // Luego, llamamos recursivamente a "borrarElemento" para eliminar el sucesor inmediato
        borrarElemento(nodo.derecho, nodo.valor);
      }
    }
  }
};
