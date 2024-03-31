// Procedimiento para insertar un elemento al principio de una lista enlazada
procedure insertAtTheBeginning(var actual: list; data: integer);
var
    aux: list; // Variable para el nuevo nodo
begin
    new(aux); // Creamos un nuevo nodo
    aux^.data := data; // Asignamos el valor 'data' al campo 'data' del nodo
    aux^.next := actual; // Enlazamos el nuevo nodo con el nodo actual (anterior cabeza)
    actual := aux; // El nuevo nodo se convierte en la nueva cabeza de la lista
end;
