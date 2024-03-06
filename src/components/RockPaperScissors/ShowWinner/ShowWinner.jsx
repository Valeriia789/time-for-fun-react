export const ShowWinner = ({ winner = 0 }) => {
  const text = {
    "-1": "Цього разу перемога за тобою",
    0: "Я не програв - не виграли",
    1: "Повстання машин скоро :D",
  };

  return <h2>{text[winner]}</h2>;
};
