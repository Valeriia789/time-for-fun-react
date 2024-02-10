import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  width: 100%;

  padding: 24px;
  color: rgb(249, 249, 249);
`;

export const StyledTitle = styled.h2`
  margin: 0;

  font-weight: 400;
`;

export const StyledText = styled.p`
  font-size: 18px;
`;

export const BallContainer = styled.div`
  padding: 32px;
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
  font-size: 140px;
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
`;

export const StyledButton = styled.button`
  width: fit-content;

  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgb(28, 31, 62);

  font-size: 24px;
  font-weight: 400;
  color: rgb(249, 249, 249);
`;
