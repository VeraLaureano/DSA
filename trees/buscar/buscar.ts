// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "buscar" que toma un nodo (de tipo Arbol o nulo) y un valor numérico como argumentos
export const buscar = (nodo: Arbol | null, valor: number): Arbol | null => {
  // Si el nodo es nulo o el valor del nodo actual es igual al valor buscado, devolvemos el nodo actual
  if (!nodo || nodo.valor === valor)
    return nodo
  else if (valor < nodo.valor) 
    // Si el valor buscado es menor que el valor del nodo actual, realizamos la búsqueda en el subárbol izquierdo
    return buscar(nodo.izquierdo, valor)
  else
    // Si el valor buscado es mayor que el valor del nodo actual, realizamos la búsqueda en el subárbol derecho
    return buscar(nodo.derecho, valor)
}
