// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type";

// Definimos una función llamada "verValoresEnRango" que toma un nodo (de tipo Arbol o nulo),
// así como dos valores numéricos "min" y "max" que representan el rango deseado.
const verValoresEnRango = (nodo: Arbol | null, min: number, max: number): void => {
  // Si el nodo no es nulo, realizamos lo siguiente:
  if (nodo) {
    // Si el valor del nodo actual está dentro del rango [min, max], lo imprimimos
    if (nodo.valor >= min && nodo.valor <= max) 
      console.log(nodo.valor);
    // Luego, llamamos recursivamente a "verValoresEnRango" para el subárbol izquierdo
    verValoresEnRango(nodo.izquierdo, min, max);
    // Finalmente, llamamos recursivamente a "verValoresEnRango" para el subárbol derecho
    verValoresEnRango(nodo.derecho, min, max);
  }
};
