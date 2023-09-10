// Define an interface for a binary tree node
interface Tree {
  value: number
  leftChildren: TreeOrNull
  rightChildren: TreeOrNull
}

// Define a type that can be either a binary tree node or null
type TreeOrNull  = Tree | null

// Define a class for a binary tree node
class Tree {
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
function insertNode(node: TreeOrNull, value: number): Tree {
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
function preOrder(node: TreeOrNull) {
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
function inOrder(node: TreeOrNull) {
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
function postOrder(node: TreeOrNull) {
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

// ===== ===== ===== IMPLEMENT ALGORITHMS ===== ===== ===== 
let myTree: TreeOrNull = null

const generateRandomArray = (length: number, min: number, max: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

const randomArray = generateRandomArray(50, 1, 100)

const generateTree = (node: TreeOrNull, array: number[]): TreeOrNull => {
  for (let i = 0; i < array.length; i++) {
    node = insertNode(node, array[i])
  }
  
  return node
}

myTree = generateTree(myTree, randomArray)

console.log(randomArray)
preOrder(myTree)