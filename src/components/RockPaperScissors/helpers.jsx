export const actions = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

export function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

export function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0; // Tie
  } else if (
    (action1 === "rock" && action2 === "scissors") ||
    (action1 === "paper" && action2 === "rock") ||
    (action1 === "scissors" && action2 === "paper")
  ) {
    return -1; // Player wins
  } else {
    return 1; // Computer wins
  }
}