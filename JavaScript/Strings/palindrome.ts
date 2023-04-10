//With methods
function isPalindrome(str: string): boolean {
  let isPalindrome: boolean = false;  
  let normalStr: string = str.toLowerCase().replace(/ /g, "");
  let strArray: string[] = normalStr.split("").reverse();  
  let strReverse: string = strArray.join("");

  console.log("normalStr => ", normalStr);    
  console.log("strReverse => ", strReverse);

  if (normalStr === strReverse) {
    console.log("It is a palindrome");
    isPalindrome = true;
  } else {
    console.log("It is not a palindrome");
  }

  return isPalindrome;
}

//With for
/*function isPalindrome(str: string): boolean {
  let isPalindrome: boolean = true;
  let normalStr: string = str.toLowerCase().replace(/[\W_]/g, "");

  for (let i = 0; i < normalStr.length / 2; i++) {
    if (normalStr[i] !== normalStr[normalStr.length - 1 - i]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}
*/

//Just with normal string and without spaces
/*function isPalindrome(str: string): boolean {
  return str == str.split("").reverse().join("");
}*/

let s = "race car";
//let s = "My age is 0, 0 si ega ym.";
//let s ="0_0 (: /-\ :) 0–0"
//let s = "1 eye for of 1 eye";
let itIsPalindrome = isPalindrome(s);
console.log("itIsPalindrome => ", itIsPalindrome);
