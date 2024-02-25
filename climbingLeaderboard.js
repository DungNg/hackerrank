function climbingLeaderboard(ranked, player) {
  // Write your code here
  const result = [];
  const rank = [...new Set(ranked)];

  player.forEach((item) => {
    let left = 0;
    let right = rank.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (item === rank[mid]) {
        result.push(mid + 1);
        break;
      } else if (item > rank[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (left > right) {
      result.push(left + 1);
    }
  });
  console.log(result);
  return result;
}

module.exports = { climbingLeaderboard };
