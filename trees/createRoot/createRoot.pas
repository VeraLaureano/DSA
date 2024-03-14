procedure crearRoot (var root: arbol; value: integer);
begin
    new(root);
    root^.val := value;
    root^.left := nil;
    root^.right := nil;
end;