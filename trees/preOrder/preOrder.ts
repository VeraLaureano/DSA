import { TreeNode } from '../type'

export const preOrder = (root: TreeNode | null): void => {
  if (root !== null) {
    console.log(root.key)
    preOrder(root.left)
    preOrder(root.right)
  }
}
