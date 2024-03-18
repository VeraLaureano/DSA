// Definimos un procedimiento llamado "preOrder" que toma un puntero a un nodo de árbol (de tipo "arbol") como argumento
procedure preOrder(nodo: arbol);
begin
    // Si el nodo no es nulo (es decir, existe), realizamos el recorrido en preorden
    if (nodo <> nil) then
    begin
        // Imprimimos el valor del nodo actual
        writeln(nodo^.valor);
        // Luego, llamamos recursivamente a "preOrder" para el subárbol izquierdo
        preOrder(nodo^.izquierdo);
        // Finalmente, llamamos recursivamente a "preOrder" para el subárbol derecho
        preOrder(nodo^.derecho)
    end
end;
