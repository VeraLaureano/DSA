// Define an interface for a binary tree node
export interface InterfaceTree {
  value: number
  leftChildren: TreeOrNull
  rightChildren: TreeOrNull
}

// Define a type that can be either a binary tree node or null
export type TreeOrNull  = Tree | null

// Define a class for a binary tree node
export class Tree {
  value: number
  leftChildren: TreeOrNull
  rightChildren: TreeOrNull

  // Constructor for the binary tree node class
  constructor(value: number) {
    this.value = value
    this.leftChildren = null   
    this.rightChildren = null   
  }
}

// ===== ===== ===== INSERT NODE IN BINARY TREE ===== ===== =====
// Define a function for inserting a node into a binary tree
export function insertNode(node: TreeOrNull, value: number): Tree {
  // If the node is null, create a new node with the given value
  if (node === null) {
    return new Tree(value)
  }

  // If the value is less than the current node's value, insert it into the left subtree
  if (value < node.value) {
    node.leftChildren = insertNode(node.leftChildren, value)
  }
  // Otherwise, insert it into the right subtree
  else {
    node.rightChildren = insertNode(node.rightChildren, value)
  }

  // Return the modified node
  return node
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== TRAVERSING A BINARY TREE ===== ===== =====
// Define a function for traversing a binary tree in pre-order
export function preOrder(node: TreeOrNull): void {
  // If the node is null, return
  if (node === null) {
    return
  } 
  // Otherwise, visit the node, traverse the left subtree, and traverse the right subtree
  else {
    console.log(node.value)
    preOrder(node.leftChildren)
    preOrder(node.rightChildren)
  }
}
// Define a function for traversing a binary tree in-order
export function inOrder(node: TreeOrNull): void {
  // If the node is null, return
  if (node === null) {
    return
  } 
  // Otherwise, traverse the left subtree, visit the node, and traverse the right subtree
  else {
    inOrder(node.leftChildren)
    console.log(node.value)
    inOrder(node.rightChildren)
  }
}

// Define a function for traversing a binary tree in post-order
export function postOrder(node: TreeOrNull): void {
  // If the node is null, return
  if (node === null) {
    return
  } 
  // Otherwise, traverse the left subtree, traverse the right subtree, and visit the node
  else {
    postOrder(node.leftChildren)
    postOrder(node.rightChildren)
    console.log(node.value)
  }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== SEARCH VALUE IN A BINARY TREE ===== ===== =====
// Define a function for searching a binary tree for a node with a given value
export function search (node: TreeOrNull, value: number): TreeOrNull {
  // If the node is null or has the value we're looking for, return the node
  if (node === null || node.value === value) 
    return node
    // If the value is less than the current node's value, search the left subtree
  else if (value < node.value)
    return search(node.leftChildren, value)
    // If the value is greater than the current node's value, search the right subtree
  else
    return search(node.rightChildren, value)
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== SEARCH MIN AND MAX ===== ===== =====
// In these two cases, recursion is not so effective since we could use a while loop,
// which would be more effective because the search is linear.

// Define a function for finding the minimum value in a binary tree using recursion
export function findMinRecursive (node: TreeOrNull): number | null {
  // If the node is null, return null
  if (node === null) 
    return null

  // Otherwise, call the function recursively on the left subtree
  return findMinRecursive(node.leftChildren)
}

// Define a function for finding the maximum value in a binary tree using recursion
export function findMaxRecursive (node: TreeOrNull): number | null {
  // If the node is null, return null
  if (node === null)
    return null

  // Otherwise, call the function recursively on the right subtree
  return findMaxRecursive(node.rightChildren)
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== PRINT IN RANGE ===== ===== =====
// This function traverses a binary tree and prints all values that are within a given range.
export function valueInRange(node: TreeOrNull, min: number, max: number): void {
  if (node !== null) {
    if (node.value >= min && node.value <= max) {
      console.log(node.value)
      valueInRange(node.leftChildren, min, max)
      valueInRange(node.rightChildren, min, max)
    }
  }
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== DELETE NODE ===== ===== =====
export function deleteNode(node: TreeOrNull, value: number): TreeOrNull {
  let aux: TreeOrNull

  if (node === null) {
    // If the node is null, return null
    return node 
  }
  else if (value < node.value) {
    // If the value is less than the current node's value, traverse left
    node.leftChildren = deleteNode(node.leftChildren, value) 
  }
  else if (value > node.value) {
    // If the value is greater than the current node's value, traverse right
    node.rightChildren = deleteNode(node.rightChildren, value)
  }
  else {
    if (node.leftChildren === null && node.rightChildren === null) { 
      // If the node has no children
      // Set the node to null
      node = null 
    }
    else if (node.leftChildren === null) {
      // If the node has only a right child
      aux = node
      // Replace the current node with its right child
      node = aux.rightChildren 
      aux = null
    }
    else if (node.rightChildren === null) { 
      // If the node has only a left child
      aux = node
      node = aux.leftChildren 
      // Replace the current node with its left childs
      aux = null
    }

    if (node) { // If the current node exists
      // Find the minimum value in the right subtree of the current node
      const minRight = findMinRecursive(node.rightChildren) 

      // Replace the current node's value with that minimum value
      node.value = Number(minRight) 
      // Delete that minimum value from the right subtree of the current node
      node.rightChildren = deleteNode(node.rightChildren, node.value) 
    }
  }

  return node // Return the modified tree
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 
