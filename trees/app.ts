import { generateRandomArray, generateTreeFromArray } from '../utils/modules'
import { TreeOrNull, inOrder } from './trees'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const tree = async (): Promise<void> => {
  let myTree: TreeOrNull = null
  const size = await new Promise<string>(resolve => rl.question('Ingresa el tamaño del array: ', resolve))
  const min = await new Promise<string>(resolve => rl.question('Ingresa el valor mínimo: ', resolve))
  const max = await new Promise<string>(resolve => rl.question('Ingresa el valor máximo: ', resolve))

  const randomArray = generateRandomArray(Number(size), Number(min), Number(max))
  myTree = generateTreeFromArray(myTree, randomArray)

  console.log(randomArray)
  inOrder(myTree)

  rl.close()
}

tree()