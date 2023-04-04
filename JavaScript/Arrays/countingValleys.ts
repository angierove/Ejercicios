function countingValleys(steps: number, path: string): number {
  let valleys: number = 0;
  let downBelow: number = 0;
  let seaLevel: number = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      downBelow = 1;
      seaLevel -= 1;
    } else {
      downBelow = 0;
      seaLevel += 1;
    }
    if (downBelow == 0 && seaLevel == 0) {
      valleys += 1;
    }
  }
  return valleys;
}

//let path: string = "UDDDUDUU";
let path: string = "DDUUDDUDUUUD";
let valleys: number = countingValleys(12, path);
console.log("valleys => ", valleys);
