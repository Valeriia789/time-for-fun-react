import styled from "styled-components";

export const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
`;

export const Row = styled.div``;

export const SquareBtn = styled.button`
  float: left;

  width: 100px;
  height: 100px;

  margin-top: -1px;
  margin-left: -1px;
  padding: 0;

  border: 2px solid rgb(28, 31, 62);

  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: rgb(30, 78, 128);
`;

export const StyledButton = styled.button`
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgb(28, 31, 62);

  font-size: 24px;
  font-weight: 400;
  color: rgb(249, 249, 249);
`;
