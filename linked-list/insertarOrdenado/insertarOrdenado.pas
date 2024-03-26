procedure insertarOrdenado (var l: lista; n: integer);
var
    nue, ant, act: lista;
begin
    new(nue);
    nue^.dato := n;
    nue^.sig := nil;
    act := l;
    ant := l;

    while (act <> nil) and (num > act^.dato) do
    begin
        ant := act;
        act := act^.sig
    end;

    if (act = l) then
    begin
        nue^.sig := l;
        l := nue;
    end;
    else 
    begin
        ant^.sig := nue;
        nue^.sig := act;
    end;
end;

^
<>