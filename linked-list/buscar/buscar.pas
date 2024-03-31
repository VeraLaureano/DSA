// Función para buscar un elemento en una lista enlazada
function buscar(l: lista; n: integer): boolean;
var
    encontre: boolean; // Variable para rastrear si se encontró el elemento
begin
    encontre := false; // Inicializamos la variable como falso (no se ha encontrado aún)
    while (not encontre) and (l <> NIL) do
    begin
        if (l^.dato = n) then
            encontre := true // Si encontramos el elemento, actualizamos la variable a verdadero
        else
            l := l^.sig; // Avanzamos al siguiente nodo en la lista
    end;
    buscar := encontre; // Devolvemos el resultado de la búsqueda
end;
