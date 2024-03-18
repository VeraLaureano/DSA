// Definimos un procedimiento llamado "inOrder" que toma un puntero a un nodo de árbol (de tipo "arbol") como argumento
procedure inOrder(nodo: arbol);
begin
    // Si el nodo no es nulo (es decir, existe), realizamos el recorrido en orden (in-order)
    if (nodo <> nil) then
    begin
        // Llamamos recursivamente a "inOrder" para el subárbol izquierdo
        inOrder(nodo^.hi);
        // Imprimimos el valor del nodo actual
        writeln(nodo^.dato);
        // Luego, llamamos recursivamente a "inOrder" para el subárbol derecho
        inOrder(nodo^.hd)
    end
end;
