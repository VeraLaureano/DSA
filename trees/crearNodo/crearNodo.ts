// Importamos el tipo Arbol desde su archivo correspondiente
import { Arbol } from "../type"

// Definimos una función llamada "crearNodo" que toma un valor numérico como argumento
export const crearNodo = (valor: number): Arbol => {
  // Creamos un nuevo nodo de árbol con el valor proporcionado
  const nodo = new Arbol(valor)
  // Devolvemos el nodo creado
  return nodo
}
