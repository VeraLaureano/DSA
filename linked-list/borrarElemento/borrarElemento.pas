procedure borrarElemento (var l: lista; n: integer; var exito: boolean);
var
    ant, act: lista;
begin
    exito := false;
    act := l;
    while (act <> NIL) and (act^.dato <> n) do
    begin
        ant := act;
        act := act^.sig
    end;
    if (act <> NIL) then
    begin
        exito := true;
        if (act = pri) then
            pri := act^.sig
        else
            ant^.sig := act^.sig;
        dispose(act);
    end;
end;