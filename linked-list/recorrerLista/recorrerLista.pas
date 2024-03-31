// Procedimiento para recorrer una lista enlazada e imprimir sus datos
procedure recorrerLista(l: lista);
begin
    while (l <> NIL) do // Mientras no lleguemos al final de la lista
    begin
        { hacer algo con los datos } // Comentario: Aquí puedes realizar alguna operación con los datos del nodo
        writeln(l^.dato); // Imprimimos el valor del campo 'dato' del nodo actual
        l := l^.sig; // Avanzamos al siguiente nodo
    end;
end;
