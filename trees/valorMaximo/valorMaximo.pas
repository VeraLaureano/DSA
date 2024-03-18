// Definimos una función llamada "valorMaximo" que toma un puntero a un nodo de árbol (de tipo "arbol") como argumento
function valorMaximo(nodo: arbol): integer;
begin
    // Si el nodo es nulo (es decir, no existe), devolvemos -1 (indicando que no hay valor máximo)
    if (nodo = nil) then
        valorMaximo := -1
    else if (nodo^.derecho <> nil) then
        // Si el subárbol derecho no es nulo, llamamos recursivamente a "valorMaximo" para ese subárbol
        valorMaximo := valorMaximo(nodo^.derecho)
    else 
        // Si el subárbol derecho es nulo, devolvemos el valor del nodo actual como el valor máximo
        valorMaximo := nodo^.valor
end;
