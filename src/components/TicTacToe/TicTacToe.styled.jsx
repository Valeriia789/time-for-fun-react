import styled from "styled-components";

export const TicTacToeContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

  padding: 24px;

  background-color: ${(p) => p.theme.colors.componentBgc};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const SquareBtn = styled.button`
  float: left;

  width: 100px;
  height: 100px;

  margin-top: -1px;
  margin-left: -1px;
  padding: 0;

  border: 2px solid rgb(170, 200, 85);

  background-color: ${(p) => p.theme.colors.bgcPrimary};

  /* background-color: transparent; */

  text-align: center;
  font-size: 40px;
  cursor: pointer;

  color: rgb(200, 200, 60);
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;

  color: rgb(170, 200, 85);
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  padding-bottom: 18px;
  color: rgb(200, 200, 60);
`;

export const StyledScore = styled.p`
  font-size: 24px;
  padding: 12px;
  color: rgb(200, 200, 60);
`

export const StyledButton = styled.button`
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgba(7, 14, 7, 0.75);

  font-size: 24px;
  font-weight: 400;
  color: rgb(170, 200, 85);
`;
