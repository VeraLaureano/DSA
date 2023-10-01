import { TreeOrNull, insertNode } from '../trees/trees'

export const generateRandomArray = (length: number, min: number, max: number): number[] => {
  const randomArray: number[] = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    randomArray.push(randomNumber)
  }

  return randomArray
}

export const generateOrderArray = (length: number): number[] => {
  const orderArray:number[] = []

  for (let i = 0; i < length; i++) {
    orderArray.push(Number(i))
  }

  return orderArray
}
  
export const generateTreeFromArray = (node: TreeOrNull, array: number[]): TreeOrNull => {
  for (let i = 0; i < array.length; i++) {
    node = insertNode(node, array[i])
  }
    
  return node
}