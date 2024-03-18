// Definimos un procedimiento llamado "insertar" que toma un puntero a un nodo de árbol (de tipo "arbol") y un valor entero como argumentos
procedure insertar(var nodo: arbol; valor: integer);
begin
    // Si el nodo es nulo (es decir, no existe), creamos una raíz con el valor proporcionado
    if (nodo = nil) then
        crearRaiz(nodo, valor);
    else if (valor < nodo^.dato) then
        // Si el valor es menor que el dato del nodo actual, lo insertamos en el subárbol izquierdo
        insertar(nodo^.hi, valor)
    else if (valor > nodo^.dato) then
        // Si el valor es mayor que el dato del nodo actual, lo insertamos en el subárbol derecho
        insertar(nodo^.hd, valor)
end;
