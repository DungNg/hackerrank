function gridChallenge(grid) {
  // Write your code here
  let gridArray = [];
  for (let index = 0; index < grid.length; index++) {
    let gridItemArray = grid[index].split("");
    gridItemArray.sort(function (a, b) {
      return a.localeCompare(b);
    });
    gridArray.push(gridItemArray);
  }

  if (checkAlphabeticalTopToBottom(gridArray)) {
    return "YES";
  } else {
    return "NO";
  }
}

function checkAlphabeticalTopToBottom(grid) {
  console.log(grid);
  for (let i = 0; i < grid[0].length; i++) {
    for(let j = 0; j < grid.length - 1; j++) {
      if (grid[j][i].localeCompare(grid[j+1][i]) > 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));
console.log(gridChallenge(["kc", "iu"]));
