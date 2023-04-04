/*function repeatedString(s: string, n: number): number {
  let total: number = 0;
  let infiniteString: string[] = [];

  if (s == "a" && n <= Math.pow(10, 12)) {
    return n;
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < s.length; j++) {
        if (infiniteString.length < n) {
          infiniteString.push(s[j]);
        }
      }
    }
  }

  for (let k = 0; k < infiniteString.length; k++) {
    if (infiniteString[k] == "a") {
      total += 1;
    }
  }

  console.log("infiniteString => ", infiniteString);
  console.log(infiniteString.length);
  return total;
}

//let str: string = "aba";
let str: string = "a";
let n: number = 1000000000000;
let total: number = repeatedString(str, n);
console.log("total => ", total);
*/

function getACount(s: string) {
  const match = s.match(/a/g);
  console.log("match.length => ", match?.length);
  return match ? match.length : 0;
}

function repeatedString(s: string, n: number): number {  
  const aCount = getACount(s);
  const residue = n % s.length;
  const baseCount = Math.floor(n / s.length) * aCount;

  if (residue === 0) {
    return baseCount;
  }

  const lastStr = s.substring(0, residue);
  const lastAcount = getACount(lastStr);

  return baseCount + lastAcount;
}

let str: string = "a";
let n: number = 1000000000000;
let total: number = repeatedString(str, n);
console.log("total => ", total);
