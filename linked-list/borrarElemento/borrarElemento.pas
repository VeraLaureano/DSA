procedure borrarElemento(var l: lista; n: integer; var exito: boolean);
var
    ant, act: lista; // Variables para rastrear el nodo anterior y el nodo actual
begin
    exito := false; // Inicializamos la variable de éxito como falso
    act := l; // Comenzamos desde el primer nodo de la lista

    // Buscamos el nodo con el valor 'n' en la lista
    while (act <> NIL) and (act^.dato <> n) do
    begin
        ant := act; // Guardamos el nodo actual como el nodo anterior
        act := act^.sig; // Avanzamos al siguiente nodo
    end;

    // Si encontramos el nodo con el valor 'n'
    if (act <> NIL) then
    begin
        // Verificamos si es el primer nodo de la lista
        if (act = l) then
            l := act^.sig // Si es el primero, actualizamos la cabeza de la lista
        else
            ant^.sig := act^.sig; // Si no es el primero, enlazamos el nodo anterior con el siguiente

        dispose(act); // Liberamos la memoria del nodo encontrado
        exito := true; // Indicamos que la operación fue exitosa
    end;
end;
