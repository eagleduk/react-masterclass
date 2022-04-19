import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./router/Chart";
import Coin from "./router/Coin";
import Coins from "./router/Coins";
import Price from "./router/Price";


function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:coinId" element={<Coin />}>
                    <Route path="price" element={<Price />} />
                    <Route path="chart" element={<Chart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

