import styled from "styled-components";

{
  /* <a href="https://www.freepik.com/free-vector/children-playing-rock-paper-scissors_5361193.htm#fromView=search&page=8&position=46&uuid=aec917a8-25b6-4306-8234-a356b43ca5d9">Image by brgfx</a> on Freepik */
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;

  text-align: center;

  background-color: ${(p) => p.theme.colors.componentBgc};
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

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
`;

export const GameContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center; */
`;

