import { Link, useNavigate } from "react-router-dom";
import SearchAdmin from "./search";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <header className="bg-[#2474E5]">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to={"/admin"}>
              <span className="sr-only">Home</span>
              <img src="./img/logo.png" alt="" />
            </Link>
          </div>
          <div className="grow max-w-md hidden md:block">
            <SearchAdmin />
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className=" px-5 py-2.5 text-sm font-medium text-white border-b-2 border-white"
                href="#"
              >
                Account
              </a>
              <div className="hidden sm:flex">
                <button
                  onClick={handleLogout}
                  className=" px-5 py-2.5 text-sm font-medium text-white"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
