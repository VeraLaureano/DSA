// Procedimiento para insertar un elemento de manera ordenada en una lista enlazada
procedure insertarOrdenado(var l: lista; n: integer);
var
    nue, ant, act: lista; // Variables para el nuevo nodo, nodo anterior y nodo actual
begin
    new(nue); // Creamos un nuevo nodo
    nue^.dato := n; // Asignamos el valor 'n' al campo 'dato' del nodo
    nue^.sig := nil; // Establecemos el siguiente nodo como NIL (fin de la lista)

    act := l; // Comenzamos desde la cabeza de la lista
    ant := l; // Inicializamos el nodo anterior con la cabeza de la lista

    // Buscamos la posición adecuada para insertar el nuevo nodo
    while (act <> nil) and (n > act^.dato) do
    begin
        ant := act; // Guardamos el nodo actual como el nodo anterior
        act := act^.sig; // Avanzamos al siguiente nodo
    end;

    // Si el nuevo nodo debe ser el primero en la lista
    if (act = l) then
    begin
        nue^.sig := l; // Enlazamos el nuevo nodo con la lista existente
        l := nue; // El nuevo nodo se convierte en la nueva cabeza de la lista
    end
    else 
    begin
        ant^.sig := nue; // Enlazamos el nodo anterior con el nuevo nodo
        nue^.sig := act; // Enlazamos el nuevo nodo con el nodo actual
    end;
end;
