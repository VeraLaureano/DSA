// Definimos una función llamada "valorMinimo" que toma un puntero a un nodo de árbol (de tipo "arbol") como argumento
function valorMinimo(nodo: arbol): integer;
begin
    // Si el nodo es nulo (es decir, no existe), devolvemos -1
    if (nodo = nil) then
        valorMinimo := -1
    else if (nodo^.izquierdo <> nil) then
        // Si el subárbol izquierdo no es nulo, llamamos recursivamente a "valorMinimo" para ese subárbol
        valorMinimo := valorMinimo(nodo^.izquierdo)
    else
        // Si el subárbol izquierdo es nulo, devolvemos el valor del nodo actual
        valorMinimo := nodo^.valor
end;
