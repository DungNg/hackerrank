function pageCount(n, p) {
  // Write your code here
  let pageCount = 0;
  if (p > Math.floor(n / 2)) {
    pageCount = Math.floor((n - (p - (n % 2 == 0 ? 1 : 0))) / 2);
  } else {
    pageCount = Math.floor(p / 2);
  }
  return pageCount;
}

console.log(pageCount(6, 5));

// Internet Solution
// function pageCount(n, p) {
//   // Write your code here
//   let frontFlip = Math.floor(p / 2);
//   let backFlip = Math.floor(n / 2) - frontFlip;
//   return Math.min(frontFlip, backFlip);
// }
