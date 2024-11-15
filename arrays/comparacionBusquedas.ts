const linearSearch = (arr: number[], target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) 
      return i;
  }

  return -1;
}

const binarySearch = (arr: number[], target: number): number => {
  let low: number = 0;
  let high: number = arr.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (arr[mid] === target) 
      return mid
    else if (arr[mid] < target)
      low = mid + 1
    else 
      high = mid - 1
  }

  return -1
}

const obj: { arr: number[], target: number } = {
  arr:[1,2,3,4,5,6,7,8,9,10],
  target: 55
}

console.time('Linear Search');
console.log(linearSearch(obj.arr, obj.target));
console.timeEnd('Linear Search');

console.time('Binary Search');
console.log(binarySearch(obj.arr, obj.target));
console.timeEnd('Binary Search');