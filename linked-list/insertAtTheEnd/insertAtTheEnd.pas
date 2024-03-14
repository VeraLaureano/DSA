procedure insertAtTheEnd(var actual, last: list; data: integer);
var aux : lista;
begin
    new (aux);
    aux^.data:= data;
    aux^.next := NIL;
    if actual <> Nil then
        last^.next := aux;
    else
        actual := aux;
    last := aux;
end;
