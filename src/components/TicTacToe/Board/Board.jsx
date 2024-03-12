import { Row, SquareBtn } from "./Board.styled";

export const Board = ({ board, handleClick }) => {
  return (
    <>
      {[0, 1, 2].map((rowIndex) => (
        <Row key={rowIndex}>
          {[0, 1, 2].map((colIndex) => {
            const index = rowIndex * 3 + colIndex;
            return (
              <SquareBtn key={index} onClick={() => handleClick(index)}>
                {board[index]}
              </SquareBtn>
            );
          })}
        </Row>
      ))}
    </>
  );
};
