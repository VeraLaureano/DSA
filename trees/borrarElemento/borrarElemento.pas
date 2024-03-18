// Definimos un procedimiento llamado "borrarElemento" que toma un puntero a un nodo de árbol (de tipo "arbol"),
// así como un valor entero "valor" que representa el elemento a borrar.
procedure borrarElemento(var nodo: arbol; valor: integer);
var
    aux: arbol;
begin
    // Si el nodo no es nulo, realizamos lo siguiente:
    if (nodo <> nil) then
    begin
        // Si el valor es menor que el valor del nodo actual, realizamos la búsqueda en el subárbol izquierdo
        if (valor < nodo^.valor) then
            borrarElemento(nodo^.izquierdo, valor)
        // Si el valor es mayor que el valor del nodo actual, realizamos la búsqueda en el subárbol derecho
        else if (valor > nodo^.valor) then
            borrarElemento(nodo^.derecho, valor)
        else
        begin
            // Si el nodo actual tiene ambos subárboles nulos, lo eliminamos y establecemos el nodo como nulo
            if (nodo^.izquierdo = nil) and (nodo^.derecho = nil) then
            begin
                dispose(nodo);
                nodo := nil;
            end 
            // Si el subárbol izquierdo es nulo, reemplazamos el nodo actual por su subárbol derecho
            else if (nodo^.izquierdo = nil) then
            begin
                aux := nodo;
                nodo := nodo^.derecho;
                dispose(aux);
            end
            // Si el subárbol derecho es nulo, reemplazamos el nodo actual por su subárbol izquierdo
            else if (nodo^.derecho = nil) then
            begin
                aux := nodo;
                nodo := nodo^.izquierdo;
                dispose(aux);
            end
            else
            begin
                // Si el nodo actual tiene ambos subárboles no nulos, encontramos el sucesor inmediato (mínimo) en el subárbol derecho
                aux := nodo;
                nodo := nodo^.derecho;
                while (aux^.izquierdo <> nil) do
                    aux := aux^.izquierdo;
                // Reemplazamos el valor del nodo actual por el valor del sucesor inmediato
                nodo^.valor := aux^.valor;
                // Luego, llamamos recursivamente a "borrarElemento" para eliminar el sucesor inmediato
                borrarElemento(nodo^.derecho, nodo^.valor);
            end;
        end;
    end;
end;
