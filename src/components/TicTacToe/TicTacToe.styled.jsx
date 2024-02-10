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

  border: 1px solid red;

  text-align: center;
  font-size: 40px;
  cursor: pointer;
`;
