/**
 * Have the function FindIntersection(strArr) read the array of strings stored in strArr
 * which will contain 2 elements:
 * the first element will represent a list of comma-separated numbers sorted in ascending order,
 * the second element will represent a second list of comma-separated numbers (also sorted).
 * Your goal is to return a comma-separated string containing the numbers that occur
 * in elements of strArr in sorted order. If there is no intersection, return the string false.
 * */

function FindIntersection(strArr: string[]): string {
  let str0: string = strArr[0];
  let str1: string = strArr[1];
  let output: string[] = [];
  let numbers0: string[] = str0.split(", ");
  let numbers1: string[] = str1.split(", ");

  for (let i = 0; i < numbers0.length; i++) {
    for (let j = 0; j < numbers1.length; j++) {
      if (numbers0[i] === numbers1[j]) {
        output.push(numbers0[i]);
      }
    }
  }

  if (output.length) {
    return output.toString();
  } else {
    return "false";
  }

  /*let str1: string = strArr[0];
  let str2: string = strArr[1];

  const values1 = str1.split(",").map((x) => x.trim());
  const values2 = str2.split(",").map((x) => x.trim());
  const intersections: string[] = values1.filter((x) =>
    values2.some((y) => y === x)
  );
  return intersections.length ? intersections.join(",") : "false";*/
}

//let array = ["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"];
//let array = ["5, 6, 9, 11, 12, 16", "4, 6, 7, 11, 16"];
//let array = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
//let array = ["11, 12, 14, 16, 20", "11, 12, 13, 18, 21"];
//let array = ["21, 22, 23, 25, 27, 28", "21, 24, 25, 29"];
let array = ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"];
console.log(FindIntersection(array));
