function formingMagicSquare(s) {
  // Write your code here
  let result = 0;
  let magicConstant = (s.length * (s.length * s.length + 1)) / 2;
  let cachedList = {};
  for (let i = 0; i < s.length; i++) {
    let max = 0;
    let maxCached = 0;
    let sum = 0;
    for (let j = 0; j < s[i].length; j++) {
      console.log(s[i][j]);
      console.log("cache", cachedList[s[i][j]] || "not logged");
      if (max < s[i][j]) {
        max = s[i][j];
      }

      if (maxCached < s[i][j] && cachedList[s[i][j]] != null) {
        max = s[i][j];
      }

      if (cachedList[s[i][j]] == null) {
        cachedList[s[i][j]] = [i, j];
      } else {
        let savedIJ = cachedList[s[i][j]];
        if (i != savedIJ[0] || j != savedIJ[j]) {
          cachedList[s[i][j]] = [i, j];
        }
      }

      console.log("max", max);
      sum += s[i][j];
      if (j === s[i].length - 1) {
        let pickedNumber = maxCached != 0 ? maxCached : max;
        s[cachedList[pickedNumber][0]][cachedList[pickedNumber][1]] =
          magicConstant - (sum - pickedNumber);

        cachedList[magicConstant - (sum - pickedNumber)] = [
          cachedList[pickedNumber][0],
          cachedList[pickedNumber][1],
        ];
        result += Math.abs(magicConstant - (sum - pickedNumber) - pickedNumber);
      }
    }
    console.log(cachedList);
    console.log(s);
    console.log("-----------------------");
  }
  return result;
}

console.log(
  formingMagicSquare([
    [4, 5, 8],
    [2, 4, 1],
    [1, 9, 7],
  ])
);

/*  5 3 4
    1 5 8
    6 4 2

===>
    8 3 4
    1 5 9
    6 7 2

    4 5 8
    2 4 1
    1 9 7
*/

