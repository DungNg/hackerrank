// function pickingNumbers(a) {
//   // Write your code here
//   let max = 0;
//   let cache = {};
//   for (let i = 0; i < a.length; i++) {
//     let pickNumbers = {};
//     let countEqual = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (cache[a[i]] != null) continue;
//       if (Math.abs(a[i] - a[j]) <= 1) {
//         if (a[i] == a[j]) {
//           countEqual++;
//         } else {
//           if (pickNumbers[a[j]] != null) {
//             pickNumbers[a[j]]++;
//           } else {
//             pickNumbers[a[j]] = 1;
//           }
//         }
//       }
//     }
//     if (Object.keys(pickNumbers) != 0) {
//       for (let key in pickNumbers) {
//         max = Math.max(max, pickNumbers[key] + countEqual);
//       }
//     } else {
//       max = Math.max(max, countEqual);
//     }

//     if (cache[a[i]] == null) {
//       cache[a[i]] = max;
//     }
//   }
//   return max;
// }

function pickingNumbers(a) {
  const arrLengthSubArray = [];
  let cache = {};
  for (let i = 0; i < a.length; i++) {
    if(cache[a[i]] != null) continue;
    const lengthBig = a.filter(
      (ele) => ele == a[i] || ele == a[i] + 1
    ).length;
    const lengthLess = a.filter(
      (ele) => ele == a[i] || ele == a[i] - 1
    ).length;

    arrLengthSubArray.push(Math.max(lengthBig, lengthLess));
    cache[a[i]] = true;
  }
  return Math.max(...arrLengthSubArray);
}
module.exports = { pickingNumbers };
