import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MagicBallPage from "./pages/MagicBallPage/MagicBallPage";
import QuoteGeneratorPage from "./pages/QuoteGeneratorPage/QuoteGeneratorPage";
import TicTacToePage from "./pages/TicTacToePage/TicTacToePage";
import RockPaperScissorsPage from "./pages/RockPaperScissorsPage/RockPaperScissorsPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="ball" element={<MagicBallPage />} />
        <Route path="quotes" element={<QuoteGeneratorPage />} />
        <Route path="tic-tac-toe" element={<TicTacToePage />} />
        <Route path="rock-paper-scissors" element={<RockPaperScissorsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
