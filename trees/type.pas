type
    tree = ^node;
    node = record
        val: integer;
        left, right: tree;
    end;