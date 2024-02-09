import { useState } from "react";
import { quotesData } from "../../data/quotesData.jsx";
import {StyledButton} from "./QuoteGenerator.styled.jsx"

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
    <div>
      <div>
        {quoteItem ? (
          quoteItem.quote
        ) : (
          <p>
            "Одне закінчене результативне завдання вартує півсотні
            напівзакінчених."
          </p>
        )}

        {quoteItem ? " — " + quoteItem.source : <p>— Стів Форбс</p>}
      </div>
      <StyledButton onClick={getQuote}>Ще цитату!</StyledButton>
    </div>
  );
};
