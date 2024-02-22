import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 120px;

  margin: 10px;

  background-color: grey;
`;

export const StyledScore = styled.div`
  padding: 1px;
  font-size: small;
  font-weight: bold;

  background-color: #1b6528;
`

export const StyledAction = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  color: #c5dada;
`

export const RoundButton = styled.button`
  width: 50px;
  height: 50px;

  margin: 2px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background-color: #133e10;
  color: aliceblue;

  &:hover{
    background-color: #7dd786;
  }
`;
