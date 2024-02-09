import { useState } from "react";

import {
  MainContainer,
  StyledTitle,
  BallContainer,
  BallBlack,
  BallWhite,
  BallTextContainer,
  EightContainer,
  StyledButton,
} from "./MagicBall.styled";

const answers = [
  "Певно, що так",
  "Безперечно так",
  "Без сумніву",
  "Однозначно так",
  "Можете на це розраховувати",
  "Наскільки я бачу, так",
  "Ймовірно",
  "Перспективи хороші",
  "Так",
  "Знаки вказують, що так",
  "Не розраховуйте на це",
  "Моя відповідь - ні",
  "Мої джерела кажуть, що ні",
  "Перспективи не дуже хороші",
  "Дуже сумнівно",
  "Відповідь туманна, спробуйте ще раз",
  "Запитайте пізніше",
  "Краще не казати Вам зараз",
  "Зараз складно передбачити",
  "Зосередьтеся і запитайте ще раз",
  "Йди в жопу",
];

export const MagicBall = () => {
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();

    const answerIndex = Math.floor(Math.random() * answers.length);

    setAnswer(answers[answerIndex]);
  };

  return (
    <>
      <MainContainer>
        <StyledTitle>
          Вітаю! Це магічна куля пророкувань та прийняття рішень.
        </StyledTitle>
        <p>
          Зосередьтесь, чітко сформулюйте питання та натисніть на кнопку
          "Запитати".
        </p>
        <p>
          *Увага! Куля створена в розважальних цілях, розробник не рекомендує
          ухвалювати доленосні рішення, покладаючись виключно на відповідь
          Магічнохї кулі.
        </p>
        <BallContainer>
          <BallBlack>
            <BallWhite>
              <BallTextContainer>
                {answer ? answer : <EightContainer>8</EightContainer>}
              </BallTextContainer>
            </BallWhite>
          </BallBlack>
        </BallContainer>
        <StyledButton onClick={getAnswer}>Запитати</StyledButton>
      </MainContainer>
    </>
  );
};

// const answers = [
//   "It is certain",
//   "It is decidedly so",
//   "Without a doubt",
//   "Yes - definitely",
//   "You may rely on it",
//   "As I see it, yes",
//   "Most likely",
//   "Outlook good",
//   "Yes",
//   "Signs point to yes",
//   "Don't count on it",
//   "My reply is no",
//   "My sources say no",
//   "Outlook not so good",
//   "Very doubtful",
//   "Reply hazy, try again",
//   "Ask again later",
//   "Better not tell you now",
//   "Cannot predict now",
//   "Concentrate and ask again",
// ];
