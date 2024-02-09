import { Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MagicBallPage from "./pages/MagicBallPage/MagicBallPage";
import QuoteGeneratorPage from "./pages/QuoteGeneratorPage/QuoteGeneratorPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="ball" element={<MagicBallPage />} />
        <Route path="quotes" element={<QuoteGeneratorPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
