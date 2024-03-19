import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MagicBallPage = lazy(() => import("./pages/MagicBallPage/MagicBallPage"));
const QuoteGeneratorPage = lazy(() => import("./pages/QuoteGeneratorPage/QuoteGeneratorPage"));
const TicTacToePage = lazy(() => import("./pages/TicTacToePage/TicTacToePage"));
const RockPaperScissorsPage = lazy(() => import("./pages/RockPaperScissorsPage/RockPaperScissorsPage"));
const ReversePage = lazy(() => import("./pages/ReversePage/ReversePage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="ball" element={<MagicBallPage />} />
        <Route path="quotes" element={<QuoteGeneratorPage />} />
        <Route path="tic-tac-toe" element={<TicTacToePage />} />
        <Route path="rock-paper-scissors" element={<RockPaperScissorsPage />} />
        <Route path="reverse" element={<ReversePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
