function search(node: tree; value: integer): tree;
begin
    if (node = nil or node^.val = value) then
        search := node
    else if (value < node^.val) then
        search(node^.left, value)
    else 
        search(node^.left, value)
end;