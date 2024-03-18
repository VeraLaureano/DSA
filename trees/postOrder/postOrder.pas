// Definimos un procedimiento llamado "postOrder" que toma un puntero a un nodo de árbol (de tipo "arbol") como argumento
procedure postOrder(nodo: arbol);
begin
    // Si el nodo no es nulo (es decir, existe), realizamos el recorrido en postorden
    if (nodo <> nil) then
    begin
        // Llamamos recursivamente a "postOrder" para el subárbol izquierdo
        postOrder(nodo^.hi);
        // Luego, llamamos recursivamente a "postOrder" para el subárbol derecho
        postOrder(nodo^.hd);
        // Imprimimos el valor del nodo actual
        writeln(nodo^.dato)
    end
end;
