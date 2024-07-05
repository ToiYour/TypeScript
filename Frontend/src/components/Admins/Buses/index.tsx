import { Route, Routes } from "react-router-dom";
import { getAllBusHou } from "../../../api/bushou";
import { getAllBusstation } from "../../../api/busstation";
import { getAllStation } from "../../../api/station";
import AddNewTrip from "./AddNewTrip";
import TripList from "./TripList";
const Buses = () => {
  return (
    <Routes>
      <Route index element={<TripList />} />
      <Route
        path="/add"
        loader={async () => {
          const garage = getAllBusHou();
          const busStation = getAllBusstation();
          const station = getAllStation();
          return await Promise.all([garage, busStation, station]);
        }}
        element={<AddNewTrip />}
      />
    </Routes>
  );
};

export default Buses;
