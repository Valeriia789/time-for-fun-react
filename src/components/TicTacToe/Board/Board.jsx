import { BoardContainer, Row, SquareBtn } from "./Board.styled";

export const Board = ({ board, handleClick, isXTurn, isAgainstComputer }) => {
  return (
    <BoardContainer>
      {[0, 1, 2].map((rowIndex) => (
        <Row key={rowIndex}>
          {[0, 1, 2].map((colIndex) => {
            const index = rowIndex * 3 + colIndex;
            return (
              <SquareBtn
                key={index}
                onClick={() => handleClick(index)}
                // Disable when it's not the player's turn or the square is already filled
                disabled={
                  (isAgainstComputer && !isXTurn) || board[index] !== ""
                }
              >
                {board[index]}
              </SquareBtn>
            );
          })}
        </Row>
      ))}
    </BoardContainer>
  );
};
