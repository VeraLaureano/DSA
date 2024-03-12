type
    TreeNodePtr = ^TreeNode;
    TreeNode = record
        data: integer;
        left, right: TreeNodePtr;
    end;