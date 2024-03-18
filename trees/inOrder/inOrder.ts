// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "inOrder" que toma un nodo raíz (de tipo Arbol o nulo) como argumento
export const inOrder = (root: Arbol | null): void => {
  // Si el nodo raíz no es nulo, realizamos el recorrido en orden (in-order)
  if (root !== null) {
    // Llamamos recursivamente a "inOrder" para el subárbol izquierdo
    inOrder(root.izquierdo)
    // Imprimimos el valor del nodo actual
    console.log(root.valor)
    // Luego, llamamos recursivamente a "inOrder" para el subárbol derecho
    inOrder(root.derecho)
  }
}
