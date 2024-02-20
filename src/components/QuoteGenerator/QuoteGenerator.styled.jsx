import styled from "styled-components";

export const QuoteMainContainer = styled.div`
  display: grid;
  gap: 12px;

  grid-template-rows: 10fr 1fr;
  font-size: 32px;
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledQuote = styled.p``;

export const StyledSource = styled.p`
  margin-left: auto;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
`;

export const StyledButton = styled.button`
  width: fit-content;
  margin-top: auto;

  margin-right: auto;
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgb(28, 31, 62);

  font-size: 24px;
  font-weight: 400;
  color: rgb(249, 249, 249);
`;
