import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./components/Details";
import Home from "./components/Homes";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
