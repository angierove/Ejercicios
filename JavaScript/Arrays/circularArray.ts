/**  An efficient solution is to deal with circular arrays using the same array. 
 * If a careful observation is run through the array, then after n-th index, 
 * the next index always starts from 0 so using the mod operator, 
 * we can easily access the elements of the circular list, 0h index. and apply mod 
 * we can do the traversal in a circular array within the given array without using any extra space. */
function rotLeft(a: number[], d: number): number[] {
  let rotatedArray: number[] = [];
  let sizeA = a.length;
  for (let i = 0; i < sizeA; i++) {
    let newIndex = d + i;
    rotatedArray.push(a[newIndex % sizeA]);
  }
  return rotatedArray;
}

let a = [1, 2, 3, 4, 5];
let d = 4;
let rotatedArray = rotLeft(a, d);
console.log("rotatedArray => ", rotatedArray);
