procedure insertAtTheBeginning(var actual: list; data: integer);
var
    aux: list;
begin
    new(aux);
    aux^.data := data;
    aux^.next := actual;
    actual := aux;
end;