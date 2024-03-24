import Nav from "./Nav";
import Button from "./Button";
const Header = () => {
  return (
    <header className="bg-[#2474E5] ">
      <div className="mx-auto px-5 py-1 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <img src="./img/logo.png" alt="" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <Nav />

            <div className="flex items-center gap-4">
              <div className="sm:flex  sm:gap-4">
                <div className="hidden sm:flex">
                  <Button
                    bgColor="bg-white"
                    color="text-black"
                    title="Hotline 24/7"
                  />
                </div>
                <div className=" sm:flex">
                  <Button
                    bgColor="bg-white"
                    color="text-black"
                    title="Đăng nhập"
                  />
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
                    strokeWidth="2"
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
      </div>
    </header>
  );
};

export default Header;
