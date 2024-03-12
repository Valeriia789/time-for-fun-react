import { useEffect, useState, useMemo, useCallback } from "react";
import { Board } from "./Board/Board";

import {
  TicTacToeContainer,
  StyledTitle,
  StyledDescription,
  StyledScore,
  SwitcherButton,
  StyledButton,
} from "./TicTacToe.styled";

export const TicTacToe = () => {
  const initialBoard = Array(9).fill("");

  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [isAgainstComputer, setIsAgainstComputer] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Input: squares - an array representing the current state of the game board
  // Output: The symbol ('X' or 'O') of the winner if there is one, otherwise null
  const getWinner = useMemo(() => {
    // Winning combinations 0-1-2 a-b-c
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

    // Iterate through each winning combination to check for a winner
    return (squares) => {
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        // Check if the squares in the winning combination are all the same symbol
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a]; // Return the winning symbol
        }
      }

      return null; // No winner found
    };
  }, []);

  // Handle click on a square
  const handleClick = useCallback(
    (index) => {
      try {
        // Check if the index is within the valid range
        if (index < 0 || index >= board.length) {
          throw new Error(`Invalid index: ${index}`);
        }

        // Check if the game has already been won or the square is already occupied
        if (getWinner(board) || board[index]) {
          throw new Error(`Invalid move: ${index}`);
        }

        // Update the board state and player turn
        setBoard((prevBoard) => {
          const newBoard = [...prevBoard];
          newBoard[index] = isXTurn ? "X" : "O";
          return newBoard;
        });
        setIsXTurn(!isXTurn);
      } catch (error) {
        // Handle the error
        setErrorMessage(error.message);
        console.error("An error occurred:", error.message);
      }
    },
    [board, isXTurn, getWinner]
  );

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  // Switcher
  const handleSwitchMode = () => {
    setIsAgainstComputer((prev) => !prev);
    setBoard(initialBoard);
    setIsXTurn(true);
    setStatus("");
    setErrorMessage("");
  };

  const makeComputerMove = useCallback(() => {
    const emptyIndexes = board.reduce(
      (indexes, value, index) => (value === "" ? [...indexes, index] : indexes),
      []
    );
    const randomIndex =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

    setTimeout(() => handleClick(randomIndex), 500);
  }, [board, handleClick]);

  useEffect(() => {
    const winner = getWinner(board);
    if (winner) {
      setStatus(`"${winner}" переміг!`);
    } else if (board.every((item) => item !== "")) {
      setStatus("Нічия! Почніть нову гру.");
    } else {
      if (isAgainstComputer && !isXTurn) {
        makeComputerMove();
      }
      setStatus(`Зараз хід: ${isXTurn ? "X" : "O"}`);
    }
  }, [board, isXTurn, getWinner, isAgainstComputer, makeComputerMove]);

  return (
    <TicTacToeContainer>
      <StyledTitle>Хрестики-нулики</StyledTitle>

      <StyledDescription>
        *Ви можете виграти, поставивши три однакових знаки ("Х" або "О") в
        горизонтальному, вертикальному чи діагональному ряду.
      </StyledDescription>
      <SwitcherButton onClick={handleSwitchMode}>
        {isAgainstComputer ? "Грати з другом" : "Грати з комп'ютером"}
      </SwitcherButton>
      <StyledScore>{status}</StyledScore>
      <Board
        board={board}
        handleClick={handleClick}
        isXTurn={isXTurn}
        isAgainstComputer={isAgainstComputer}
      />
      <StyledButton onClick={handleRestart}>Нова гра</StyledButton>
    </TicTacToeContainer>
  );
};
