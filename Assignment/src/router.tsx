import { createBrowserRouter, Outlet } from "react-router-dom";
import { getAllBusHou, getByIdBusHou } from "./api/bushou";
import { getAllBusstation } from "./api/busstation";
import { getAllStation } from "./api/station";
import { getAllTrips, getByIdTrip, getHistoryTrips } from "./api/trips";
import AddNewTrip from "./components/Admins/Buses/AddNewTrip";
import TripList from "./components/Admins/Buses/TripList";
import UpdateTrip from "./components/Admins/Buses/UpdateTrip";
import AddNewBusHouse from "./components/Admins/BusHouses/AddNewBusHouse";
import ListBusHouse from "./components/Admins/BusHouses/ListBusHouse";
import UpdateBushouse from "./components/Admins/BusHouses/UpdateBusHouse";
import DashBoard from "./components/Admins/DashBoard";
import LayoutAdmin from "./components/Admins/LayoutAdmin";
import DetailPage from "./components/Details";
import Home from "./components/Homes";
import NoPage from "./components/NoPage";
import Layout from "./Layout";
import History from "./components/Admins/Historys";
import LoginAdmin from "./components/Admins/LoginAdmin";
import Booking from "./components/Booking";
import PaymentSuccess from "./components/PaymentSuccess";
import { getByIdBooking } from "./api/booking";
import SearchOrder from "./components/OrderManager/SearchOrder";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        // loader: async () => {
        //   const { data } = await getAllStation();
        //   return data;
        // },
        element: <Home />,
      },
      {
        path: "search",
        element: <DetailPage />,
      },
      { path: "detail", element: <DetailPage /> },
      {
        path: "booking/:id",
        loader: async ({ params }) => {
          const { id } = params;
          const { data } = await getByIdTrip(id as string);
          return data;
        },
        element: <Booking />,
      },
      {
        path: "paymentsuccess/:id",
        loader: async ({ params }) => {
          const { id } = params;
          const { data } = await getByIdBooking(id as string);
          return data;
        },
        element: <PaymentSuccess />,
      },
      {
        path: "order/search",
        element: <SearchOrder />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "history",
        loader: async () => {
          const { data } = await getHistoryTrips();
          return data;
        },
        element: <History />,
      },
      // Chuyến xe
      {
        path: "buses",
        element: <Outlet />,
        children: [
          {
            path: "",
            loader: async () => {
              const { data } = await getAllTrips();
              return data;
            },
            element: <TripList />,
          },
          {
            path: "add",
            loader: async () => {
              const { data: dataGarage } = await getAllBusHou();
              const { data: dataBusStation } = await getAllBusstation();
              const { data: dataStation } = await getAllStation();
              const [garage, busStation, station] = await Promise.all([
                dataGarage,
                dataBusStation,
                dataStation,
              ]);
              return { garage, busStation, station };
            },
            element: <AddNewTrip />,
          },
          {
            path: "update/:id",
            loader: async ({ params }) => {
              try {
                const id = params.id as string;
                const { data: dataGarage } = await getAllBusHou();
                const { data: dataBusStation } = await getAllBusstation();
                const { data: dataStation } = await getAllStation();
                const { data: dataPrevTrip } = await getByIdTrip(id);
                const [garage, busStation, station, prevTrip] =
                  await Promise.all([
                    dataGarage,
                    dataBusStation,
                    dataStation,
                    dataPrevTrip,
                  ]);
                return { garage, busStation, station, prevTrip };
              } catch (error) {
                console.log("Get Data UpdateTrip", error);
              }
            },
            element: <UpdateTrip />,
          },
        ],
      },
      //Nhà xe
      {
        path: "bushouse",
        element: <Outlet />,
        children: [
          {
            path: "",
            loader: async () => {
              const { data } = await getAllBusHou();
              return data;
            },
            element: <ListBusHouse />,
          },
          {
            path: "add",
            element: <AddNewBusHouse />,
          },
          {
            path: "update/:id",
            loader: async ({ params }) => {
              const { id } = params;
              const { data } = await getByIdBusHou(id as string);
              return data;
            },
            element: <UpdateBushouse />,
          },
        ],
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
  {
    path: "auth/login",
    element: <LoginAdmin />,
  },
]);
export default routes;
