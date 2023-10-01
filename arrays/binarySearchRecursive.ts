import 'dotenv/config'
import { generateOrderArray } from '../utils/modules'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// ===== ===== ===== BINARY SEARCH RECURSIVE ===== ===== =====
export const binarySearchRecursive = (arr: number[], start: number, end: number, value: number): number => {
  let middle: number
  
  if (end >= start) {
    middle = Math.floor(start + (end - start) / 2) // calculate the middle index of the array
  
    if (arr[middle] === value) // if the middle element is equal to the value we are searching for
      return middle // return the index of the middle element
    else if (value < arr[middle]) // if the value we are searching for is less than the middle element
      return binarySearchRecursive(arr, start, middle - 1, value) // search in the left half of the array
    else 
      return binarySearchRecursive(arr, middle + 1, end, value) // search in the right half of the array
  }
  else
    return -1 // if the value is not found in the array, return -1
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// ===== ===== ===== TEST ===== ===== =====
const testBinarySearchRecursive = () => {
  const one = binarySearchRecursive([], 0, 0, 42) === -1
  const two = binarySearchRecursive([1, 2, 3, 4, 5], 0, 4, 42) === -1
  const three = binarySearchRecursive([1, 2, 3, 4, 5], 0, 4, 3) === 2
 
  return one && two && three
}
// ===== ===== ===== ==== ===== ===== =====

// ===== ===== ===== EXECUTION TIME TEST ===== ===== =====
const app = async (): Promise<void> => {
  // user length input
  const inputL: string = await new Promise<string>(resolve => rl.question('Enter the length of the array (recommended 100000000): ', resolve))
  // user input to number
  const length: number = Number(inputL)
  // generate a sorted array with the length received by input
  const orderArray: number[] = generateOrderArray(length)
  // generate a random number in range 0..length
  const random_number: number = Math.floor(Math.random() * length)

  console.log('===== ===== SEARCHS ===== =====')
  console.log('Difference in execution time between')
  console.log('linear search and recursive binary search')
  console.log(`in an array of length: ${length}`)
  
  // compare the time searching for the last element of the array
  console.group('Last number')
  console.time('Linear search (last element)')
  for (let i = 0; i < orderArray.length; i++) {
    ''
  }
  console.timeEnd('Linear search (last element)')
  
  console.time('Binary search (last element)')
  binarySearchRecursive(orderArray, 0, 999, length)
  console.timeEnd('Binary search (last element)')
  console.groupEnd()
  
  console.log('')
  
  // compare the time searching for a random element of the array
  console.group(`Random number '${random_number}'`)
  console.time('Linear search (random element)')
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i] === random_number) break
  }
  console.timeEnd('Linear search (random element)')

  console.time('Binary search (random element)')
  binarySearchRecursive(orderArray, 0, 999, length)
  console.timeEnd('Binary search (random element)')
  console.groupEnd()

  console.log('')

  // input for number of search
  const inputSearch = await new Promise<string>(resolve => rl.question('Enter number to search: ', resolve))
  const search = Number(inputSearch)

  console.log('')

  // compare the time searching for a user element
  console.group(`Your number '${search}'`)
  console.time('Linear search')
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i] === search) break
  }
  console.timeEnd('Linear search')

  console.time('Binary search')
  binarySearchRecursive(orderArray, 0, 999, search)
  console.timeEnd('Binary search')
  console.groupEnd()
  console.log('===== ===== ======== ===== =====')
  
  rl.close()
}
// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 

// if app is 'BIN_SEARCH' and test passed exec
if (process.env.APP === 'BIN_SEARCH' && testBinarySearchRecursive()) {
  app()
}