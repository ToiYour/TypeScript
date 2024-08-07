import { Link, NavLink, useLoaderData } from "react-router-dom";
import { ITripItem } from "../../../interfaces";
import ButtonAdmin from "../Button";
import Filter from "./Filter";
import ItemTrip from "./ItemTrip";

const TripList = () => {
  const dataTrips = useLoaderData() as ITripItem[];

  return (
    <div>
      <div className="capitalize mb-5">
        <nav aria-label="breadcrumb" className="w-max">
          <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
            <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
              <Link to={"/admin"}>
                <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                  dashboard
                </p>
              </Link>
              <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                /
              </span>
            </li>
            <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                Chuyến xe
              </p>
            </li>
          </ol>
        </nav>
      </div>
      <h2 className="font-semibold text-3xl text-center mb-8">
        Danh sách chuyến xe ({dataTrips.length})
      </h2>
      <div className="flex justify-between items-center">
        <NavLink to="/admin/buses/add">
          <ButtonAdmin title="Thêm mới chuyến xe" />
        </NavLink>
        <div className="mr-9">
          <Filter />
        </div>
      </div>
      <div className="grid gap-y-6 mt-5">
        {dataTrips.map((data) => (
          <ItemTrip {...data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
