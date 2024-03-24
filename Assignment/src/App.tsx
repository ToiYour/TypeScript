import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./components/Details";
import Home from "./components/Homes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
