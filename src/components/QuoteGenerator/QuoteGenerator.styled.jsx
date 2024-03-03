import styled from "styled-components";

export const QuoteMainContainer = styled.div`
  max-width: 320px;
  display: grid;
  gap: 12px;

  grid-template-rows: 10fr 1fr;
  font-size: 32px;

  @media screen and (min-width: 576px) {
    width: 400px;
    max-width: 400px;
  }

  @media screen and (min-width: 992px) {
    width: 800px;
    max-width: 800px;
  }
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

  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 24px;
  font-weight: 400;
  color: rgb(249, 249, 249);


  border: 2px solid transparent;
  border-radius: 6px;
  background-color: rgba(7, 14, 7, 0.75);

  &:focus,
  &:hover {
    border: 2px solid rgba(115, 165, 11, 0.5);
    box-shadow: 0px 6px 24px rgba(115, 165, 11, 0.85);
  }
`;
