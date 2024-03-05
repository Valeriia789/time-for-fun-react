export const ShowWinner = ({ winner = 0 }) => {
  const text = {
    "-1": "You win :)",
    0: "It's a Tie :|",
    1: "You Lose :(",
  };

  return <h2>{text[winner]}</h2>;
};
