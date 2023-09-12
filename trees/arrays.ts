// ===== ===== ===== BINARY SEARCH RECURSIVE ===== ===== =====
export const binarySearchRecursive = (arr: number[], start: number, end: number, value: number): number => {
  let middle: number
  
  if (end >= start) {
    middle = start + (end - start) / 2 // calculate the middle index of the array
  
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