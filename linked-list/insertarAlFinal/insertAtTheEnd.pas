// Procedimiento para insertar un elemento al final de una lista enlazada
procedure insertAtTheEnd(var actual, last: list; data: integer);
var
    aux: lista; // Variable para el nuevo nodo
begin
    new(aux); // Creamos un nuevo nodo
    aux^.data := data; // Asignamos el valor 'data' al campo 'data' del nodo
    aux^.next := NIL; // Establecemos el siguiente nodo como NIL (fin de la lista)

    // Si la lista no está vacía
    if actual <> Nil then
        last^.next := aux // Enlazamos el último nodo existente con el nuevo nodo
    else
        actual := aux; // Si la lista está vacía, el nuevo nodo es el primero

    last := aux; // El nuevo nodo se convierte en el último nodo
end;
