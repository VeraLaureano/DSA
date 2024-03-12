procedure crearRoot (var root: arbol; value: integer);
begin
    new(root);
    root^.val := value;
    root^.hi := nil;
    root^.hd := nil;
end;