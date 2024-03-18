// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "valorMaximo" que toma un nodo (de tipo Arbol) como argumento
export const valorMaximo = (nodo: Arbol): number => {
  // Si el nodo es nulo, devolvemos -1 (indicando que no hay valor máximo)
  if (!nodo)
    return -1
  // Si el subárbol derecho no es nulo, llamamos recursivamente a "valorMaximo" para ese subárbol
  if (nodo.derecho)
    return valorMaximo(nodo.derecho)
  // Si el subárbol derecho es nulo, devolvemos el valor del nodo actual como el valor máximo
  return nodo.valor
}
