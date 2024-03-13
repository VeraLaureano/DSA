import { TreeNode } from '../type'

export const createRoot = (data: number): TreeNode => {
  const root = new TreeNode(data)
  return root
}