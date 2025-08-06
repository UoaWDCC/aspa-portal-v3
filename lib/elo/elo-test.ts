// eloPool.ts

const DEFAULT_RATING = 1000;
const K = 32;

type PlayerRatings = {
  [playerName: string]: number;
};

const playerRatings: PlayerRatings = {};

// Calculate expected score for player A against player B
function expectedScore(ratingA: number, ratingB: number): number {
  return 1 / (1 + 10 ** ((ratingB - ratingA) / 400));
}

// Update ratings after a match where winner beats loser
function updateRatings(winner: string, loser: string): void {
  if (!(winner in playerRatings)) {
    playerRatings[winner] = DEFAULT_RATING;
  }
  if (!(loser in playerRatings)) {
    playerRatings[loser] = DEFAULT_RATING;
  }

  const Ra = playerRatings[winner];
  const Rb = playerRatings[loser];

  const Ea = expectedScore(Ra, Rb);
  const Eb = expectedScore(Rb, Ra);

  playerRatings[winner] = Math.round(Ra + K * (1 - Ea));
  playerRatings[loser] = Math.round(Rb + K * (0 - Eb));

  console.log(`\nMatch Result: ${winner} beat ${loser}`);
  console.log(`New rating for ${winner}: ${playerRatings[winner]}`);
  console.log(`New rating for ${loser}: ${playerRatings[loser]}`);
}

// Display all current player ratings sorted by rating (desc)
function showRatings(): void {
  const sortedPlayers = Object.entries(playerRatings).sort((a, b) => b[1] - a[1]);

  console.log("\nCurrent Player Ratings:");
  sortedPlayers.forEach(([player, rating]) => {
    console.log(`${player}: ${rating}`);
  });
}

// Example usage:
updateRatings("Alice", "Bob");
updateRatings("Bob", "Charlie");
updateRatings("Alice", "Charlie");

showRatings();