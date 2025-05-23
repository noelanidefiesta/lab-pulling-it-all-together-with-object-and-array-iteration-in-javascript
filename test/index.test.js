const {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
} = require('../index');

describe("NBA Stats Tracker Functions", () => {

  test("numPointsScored returns correct points", () => {
    expect(numPointsScored("Ben Gordon")).toBe(33);
  });

  test("shoeSize returns correct shoe size", () => {
    expect(shoeSize("Alan Anderson")).toBe(16);
  });

  test("teamColors returns correct array", () => {
    expect(teamColors("Brooklyn Nets")).toEqual(["Black", "White"]);
    expect(teamColors("Charlotte Hornets")).toEqual(["Turquoise", "Purple"]);
  });

  test("teamNames returns both team names", () => {
    expect(teamNames()).toEqual(expect.arrayContaining(["Brooklyn Nets", "Charlotte Hornets"]));
  });

  test("playerNumbers returns correct jersey numbers", () => {
    expect(playerNumbers("Brooklyn Nets")).toEqual(expect.arrayContaining([0, 30, 11, 1, 31]));
  });

  test("playerStats returns correct object", () => {
    expect(playerStats("Reggie Evens")).toMatchObject({ number: 30, points: 12, shoe: 14 });
  });

  test("bigShoeRebounds returns rebounds of player with biggest shoe size", () => {
    expect(bigShoeRebounds()).toBe(12); // Mason Plumlee has shoe size 19 and 12 rebounds
  });

  test("mostPointsScored returns player with most points", () => {
    expect(mostPointsScored()).toBe("Ben Gordon");
  });

  test("winningTeam returns team with most total points", () => {
    expect(winningTeam()).toBe("Brooklyn Nets");
  });

  test("playerWithLongestName returns the longest player name", () => {
    expect(playerWithLongestName()).toBe("Bismack Biyombo");
  });

  test("doesLongNameStealATon returns true or false", () => {
    expect(typeof doesLongNameStealATon()).toBe("boolean");
  });

});
