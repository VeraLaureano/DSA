procedure reccorerLista (l: lista);
begin
    while (l <> NIL)do
    begin
        { hacer algo con los datos }
        writeln(l^.dato);
        l := l^.sig;
    end;
end;