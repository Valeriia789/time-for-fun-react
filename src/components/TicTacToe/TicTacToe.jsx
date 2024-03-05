import { useEffect, useState } from "react";
import {
  TicTacToeContainer,
  Row,
  SquareBtn,
  StyledTitle,
  StyledDescription,
  StyledScore,
  StyledButton,
} from "./TicTacToe.styled";

function Square({ value, onClick }) {
  return <SquareBtn onClick={onClick}>{value}</SquareBtn>;
}

export const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (squares) => {
    // 0-1-2 a-b-c
    // 3-4-5
    // 6-7-8
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [x, y, z] = winningCombinations[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];

    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";

    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    // if there is no winner and every square is full
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`Нічия! Почніть нову гру.`);
    } else if (getWinner(squares)) {
      setStatus(`Переміг гравець: ${getWinner(squares)}`);
    } else {
      setStatus(`Зараз ходить гравець: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <TicTacToeContainer>
      <StyledTitle>Хрестики-нулики</StyledTitle>
      <StyledDescription>*На цій дошці мають грати два гравці </StyledDescription>
      <Row>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </Row>

      <Row>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </Row>

      <Row>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </Row>

      <StyledScore>{status}</StyledScore>
      <StyledButton onClick={handleRestart}>Нова гра</StyledButton>
    </TicTacToeContainer>
  );
};
