import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./LayoutAdmin";
import Buses from "./Buses";
import BusHouse from "./BusHouses";

const RouterAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="/buses/*" element={<Buses />} />
        <Route path="/bushouse/*" element={<BusHouse />} />
      </Route>
    </Routes>
  );
};

export default RouterAdmin;
