function sockMerchant(n: number, ar: number[]): number {
  let pairs: number = 0;
  ar.sort();

  console.log("sorted => ", ar);
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] == ar[i + 1]) {
      pairs += 1;
      i += 1;
    }
  }
  console.log("pairs => ", pairs);
  return pairs;
}

let ar: number[] = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(9, ar);
