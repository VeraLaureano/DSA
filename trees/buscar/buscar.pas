// Definimos una función llamada "buscar" que toma un puntero a un nodo de árbol (de tipo "arbol") y un valor entero como argumentos
function buscar(nodo: arbol; valor: integer): arbol;
begin
    // Si el nodo es nulo o el valor del nodo actual es igual al valor buscado, devolvemos el nodo actual
    if (nodo = nil or nodo^.valor = valor) then
        buscar := nodo
    else if (valor < nodo^.valor) then
        // Si el valor buscado es menor que el valor del nodo actual, realizamos la búsqueda en el subárbol izquierdo
        buscar(nodo^.izquierdo, valor)
    else 
        // Si el valor buscado es mayor que el valor del nodo actual, realizamos la búsqueda en el subárbol derecho
        buscar(nodo^.derecho, valor)
end;
