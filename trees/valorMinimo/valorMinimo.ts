// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "valorMinimo" que toma un nodo (de tipo Arbol) como argumento
export const valorMinimo = (nodo: Arbol): number => {
  // Si el nodo es nulo, devolvemos -1 (indicando que no hay valor mínimo)
  if (!nodo)
    return -1
  else if (nodo.izquierdo)
    // Si el subárbol izquierdo no es nulo, llamamos recursivamente a "valorMinimo" para ese subárbol
    return valorMinimo(nodo.izquierdo)
  // Si el subárbol izquierdo es nulo, devolvemos el valor del nodo actual como el valor mínimo
  return nodo.valor
}
