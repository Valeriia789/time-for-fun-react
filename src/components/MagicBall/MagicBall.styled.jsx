import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h2`
  margin: 0;
  padding: 12px;

  border-radius: 6px;
  background-color: #455961;

  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
`;

export const BallContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center;
  justify-content: center; */

  margin-top: 24px;
  padding: 24px;
`;

export const BallBlack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #000000;
`;

export const BallWhite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #ffffff;
`;

export const BallTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;

  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

export const EightContainer = styled.div`
  font-size: 120px;
  font-weight: 600;
`;

export const StyledButton = styled.button`
  width: fit-content;
  margin-top: 24px;

  margin-right: auto;
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: #455961;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
`;
