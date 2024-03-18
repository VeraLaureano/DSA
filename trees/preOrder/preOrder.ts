// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "preOrder" que toma un nodo raíz (de tipo Arbol o nulo) como argumento
export const preOrder = (root: Arbol | null): void => {
  // Si el nodo raíz no es nulo, realizamos el recorrido en preorden
  if (root !== null) {
    // Imprimimos el valor del nodo actual
    console.log(root.valor)
    // Luego, llamamos recursivamente a "preOrder" para el subárbol izquierdo
    preOrder(root.izquierdo)
    // Finalmente, llamamos recursivamente a "preOrder" para el subárbol derecho
    preOrder(root.derecho)
  }
}
