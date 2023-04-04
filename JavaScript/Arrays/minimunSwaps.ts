/** 
 * Bubble sort 
function minimumSwaps(arr: number[]): number {
  let minimumSwaps = 0;
  let newArray: number[] = [];
  console.log("newArray => ", newArray);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        minimumSwaps += 1;
      }
    }
  }
  newArray = [...arr];
  console.log("newArraySorted => ", newArray);
  return minimumSwaps;
}
*/

function minimumSwaps(arr: number[]): number {
  let minimumSwaps = 0;
  let newArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {        
      if (arr[min] > arr[j]) {
        console.log(arr[min])
        console.log(arr[j])
        console.log(arr[min]> arr[j])
        min = j;
        console.log("min => ", min)
      }
    }

    //swap
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      minimumSwaps += 1;
    }
  }
  newArray = [...arr];
  console.log("newArraySorted => ", newArray);
  return minimumSwaps;
}

let arr: number[] = [4, 3, 1, 2];
let minSwaps: number = minimumSwaps(arr);
console.log("minSwaps => ", minSwaps);
