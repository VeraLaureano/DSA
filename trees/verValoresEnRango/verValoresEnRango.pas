// Definimos un procedimiento llamado "verValoresEnRango" que toma un puntero a un nodo de árbol (de tipo "arbol"),
// así como dos valores enteros "min" y "max" que representan el rango deseado.
procedure verValoresEnRango(nodo: arbol; min, max: integer);
begin
    // Si el nodo no es nulo (es decir, existe), realizamos lo siguiente:
    if (nodo <> nil) then
    begin
        // Si el valor del nodo actual está dentro del rango [min, max], lo imprimimos
        if (nodo^.valor >= min) and (nodo^.valor <= max) then
            writeln(nodo^.valor);
        // Luego, llamamos recursivamente a "verValoresEnRango" para el subárbol izquierdo
        verValoresEnRango(nodo^.izquierdo, min, max);
        // Finalmente, llamamos recursivamente a "verValoresEnRango" para el subárbol derecho
        verValoresEnRango(nodo^.derecho, min, max)
    end
end;
