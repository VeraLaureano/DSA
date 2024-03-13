import { TreeNode } from "../type";

export const search = (node: TreeNode | null, value: number): TreeNode | null => {
  if (!node || node.key === value)
    return node;
  else if (value < node.key) 
    return search(node.left, value)
  else
    return search(node.right, value)
}