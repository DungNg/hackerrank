"use strict";
/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function getTotalX(a, b) {
  // Write your code here
  var factors = new Array();
  var final = new Array();
  for (var i = a.sort()[a.length - 1]; i <= b.sort()[0]; i++) {
    if (a.every((el) => i % el === 0)) {
      factors.push(i);
    }
  }
  for (var i = 0; i < factors.length; i++) {
    if (b.every((el) => el % factors[i] === 0)) {
      final.push(factors[i]);
    }
  }
  console.log("result:", final, "count:", final.length);
  return final.length;
}
getTotalX([2, 4], [16, 32, 96]);
getTotalX([2], [20, 30, 12]);
getTotalX([1], [100]);
