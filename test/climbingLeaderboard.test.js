const climbingLeaderboard = require("../climbingLeaderboard.js");

it("should return [6, 4, 2, 1]", () => {
  let ranked = "100 100 50 40 40 20 10".split(" ");
  let player = "5 25 50 120".split(" ");
  let result = [6, 4, 2, 1];
  console.log(ranked, player);
  expect(climbingLeaderboard.climbingLeaderboard(ranked, player)).toEqual(
    result
  );
});
