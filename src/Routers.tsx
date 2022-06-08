import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

export const BASE_URL = "/nmd-crypto-tracker/";
export interface RoutersProps {
  isDark: boolean;
  toggleDark: () => void;
}
function Router({ isDark, toggleDark }: RoutersProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          // 이하 환경변수는 vite.config.ts에 base와 연결된듯함
          // path={`${import.meta.env.BASE_URL}`}
          path={`${BASE_URL}/`}
          element={<Coins isDark={isDark} toggleDark={toggleDark} />}
        />
        <Route
          // path={`${import.meta.env.BASE_URL}:coinId`}
          path={`${BASE_URL}:coinId`}
          element={<Coin isDark={isDark} toggleDark={toggleDark} />}
        >
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
