import { Route, Routes } from "react-router-dom";
import ListBusHouse from "./ListBusHouse";

const BusHouse = () => {
  return (
    <Routes>
      <Route index element={<ListBusHouse />} />
    </Routes>
  );
};

export default BusHouse;
