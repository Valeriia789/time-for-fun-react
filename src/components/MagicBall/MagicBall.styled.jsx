import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(25, 50, 25, 0.75);
`;

export const DescriptionContainer = styled.div`
  display: grid;
  gap: 12px;
  padding: 24px;

  text-align: center;
  color: rgb(249, 249, 249);
`;

export const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
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
  font-weight: 600;
`;

export const EightContainer = styled.div`
  font-size: 140px;
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
  padding: 24px;
`;

export const StyledButton = styled.button`
  width: fit-content;

  padding: 12px;

  border: 2px solid transparent;
  border-radius: 6px;
  background-color: rgba(7, 14, 7, 0.75);

  font-size: 24px;
  font-weight: 400;
  color: rgb(249, 249, 249);

  &:focus,
  &:hover {
    border: 2px solid rgba(115, 165, 11, 0.5);
    box-shadow: 0px 6px 24px rgba(115, 165, 11, 0.85);
  }
`;
