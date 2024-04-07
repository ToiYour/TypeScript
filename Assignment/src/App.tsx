import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Homes";
import DetailPage from "./components/Details";
import Checkout from "./components/Checkout";
import Layout from "./Layout";
import Modal from "./components/Modal";
import NoPage from "./components/NoPage";
import RouterAdmin from "./components/Admins/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          {/* Admin */}
          <Route path="/admin/*" element={<RouterAdmin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Modal />
    </>
  );
}

export default App;
