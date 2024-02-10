import { useState } from "react";
import { quotesData } from "../../data/quotesData.jsx";
import {
  QuoteMainContainer,
  QuoteContainer,
  StyledQuote,
  StyledSource,
  StyledButton,
} from "./QuoteGenerator.styled.jsx";

export const QuoteGenerator = () => {
  const [quoteItem, setQuoteItem] = useState("");

  const getQuote = (e) => {
    e.preventDefault();

    const quoteIndex = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[quoteIndex];

    setQuoteItem(randomQuote);
  };

  console.log(quoteItem);

  return (
    <QuoteMainContainer>
      <QuoteContainer>
        {quoteItem ? (
          <StyledQuote>« {quoteItem.quote} »</StyledQuote>
        ) : (
          <StyledQuote>
            « Одне закінчене результативне завдання вартує півсотні
            напівзакінчених. »
          </StyledQuote>
        )}
        {quoteItem ? (
          <StyledSource>— {quoteItem.source}</StyledSource>
        ) : (
          <StyledSource>— Стів Форбс</StyledSource>
        )}
      </QuoteContainer>
      <StyledButton onClick={getQuote}>Ще цитату!</StyledButton>
    </QuoteMainContainer>
  );
};
