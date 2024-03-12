export class TreeNode {
  key: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(key: number) {
    this.key = key
    this.left = null
    this.right = null
  }
}