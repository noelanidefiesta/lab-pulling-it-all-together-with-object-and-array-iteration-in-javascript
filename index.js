function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper: get all players as [name, stats] from both teams
function allPlayers() {
  const game = gameObject();
  return [
    ...Object.entries(game.home.players),
    ...Object.entries(game.away.players),
  ];
}

// 3.1 Retrieve Player Information

function numPointsScored(playerName) {
  const player = allPlayers().find(([name]) => name === playerName);
  return player ? player[1].points : null;
}

function shoeSize(playerName) {
  const player = allPlayers().find(([name]) => name === playerName);
  return player ? player[1].shoe : null;
}

// 3.2 Retrieve Team Information

function teamColors(teamName) {
  const game = gameObject();
  for (const location of ["home", "away"]) {
    if (game[location].teamName === teamName) {
      return game[location].colors;
    }
  }
  return null;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 3.3 Retrieve Player Numbers and Stats

function playerNumbers(teamName) {
  const game = gameObject();
  for (const location of ["home", "away"]) {
    if (game[location].teamName === teamName) {
      return Object.values(game[location].players).map(player => player.number);
    }
  }
  return [];
}

function playerStats(playerName) {
  const player = allPlayers().find(([name]) => name === playerName);
  return player ? player[1] : null;
}

// 3.4 Advanced Challenge

function bigShoeRebounds() {
  const players = allPlayers();
  let largestShoe = 0;
  let rebounds = 0;

  players.forEach(([_, stats]) => {
    if (stats.shoe > largestShoe) {
      largestShoe = stats.shoe;
      rebounds = stats.rebounds;
    }
  });

  return rebounds;
}

// Bonus question

function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = 0;
  let topPlayer = null;

  players.forEach(([name, stats]) => {
    if (stats.points > maxPoints) {
      maxPoints = stats.points;
      topPlayer = name;
    }
  });

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  function teamPoints(team) {
    return Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
  }

  const homePoints = teamPoints(game.home);
  const awayPoints = teamPoints(game.away);

  if (homePoints > awayPoints) return game.home.teamName;
  if (awayPoints > homePoints) return game.away.teamName;
  return "Tie";
}

function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";

  players.forEach(([name]) => {
    if (name.length > longestName.length) {
      longestName = name;
    }
  });

  return longestName;
}

// SUPER Bonus question

function doesLongNameStealATon() {
  const longestNamePlayer = playerWithLongestName();
  const players = allPlayers();

  // Find max steals
  const maxSteals = players.reduce(
    (max, [_, stats]) => (stats.steals > max ? stats.steals : max),
    0
  );

  // Get steals of longest name player
  const longestNamePlayerSteals = players.find(([name]) => name === longestNamePlayer)[1]
    .steals;

  return longestNamePlayerSteals === maxSteals;
}

// Export functions if needed (for testing or other usage)
module.exports = {
  gameObject,
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
  doesLongNameStealATon,
};