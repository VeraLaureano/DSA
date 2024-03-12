procedure preOrder(node: tree);
begin
    if (node <> nil) then
    begin
        writeln(node^.val);
        preOrder(node^.left);
        preOrder(node^.right)
    end
end;