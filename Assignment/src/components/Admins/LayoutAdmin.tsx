import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HeaderAdmin from "./Headers";
import SideBarAdmin from "./Sibar";

const LayoutAdmin = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <div className="h-screen flex flex-col">
      <ToastContainer />
      <HeaderAdmin />
      <div className="grow grid grid-cols-6 ">
        <SideBarAdmin />
        <div className="col-span-5 px-10 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
