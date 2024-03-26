function buscar (l: lista; n: integer): boolean;
var
    encontre: boolean;
begin
    encontre := false;
    while (not encontre) and (pri <> NIL) do
    begin
        if (l^.dato = n) then
            encontre := true
        else
            l := l^.sig
    end;
    buscar := encontre;
end;