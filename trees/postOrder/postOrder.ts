// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "postOrder" que toma un nodo raíz (de tipo Arbol o nulo) como argumento
export const postOrder = (root: Arbol | null): void => {
  // Si el nodo raíz no es nulo, realizamos el recorrido en postorden
  if (root !== null) {
    // Llamamos recursivamente a "postOrder" para el subárbol izquierdo
    postOrder(root.izquierdo)
    // Luego, llamamos recursivamente a "postOrder" para el subárbol derecho
    postOrder(root.derecho)
    // Imprimimos el valor del nodo actual
    console.log(root.valor)
  }
}
