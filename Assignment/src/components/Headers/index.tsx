import Nav from "./Nav";
import Button from "./Button";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const btnLogin = document.querySelector('button[name="btnLogin"]');
    const btnOpenMobile = document.querySelector(".btnOpenMobile");
    btnLogin?.addEventListener("click", () => {
      openModal();
    });
    btnOpenMobile?.addEventListener("click", handleNav);
  });
  const openModal = () => {
    const modal = document.querySelector(".main-modal");
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.style.display = "flex";
  };
  const handleNav = () => {
    const iconcloseMobile = document.querySelector(".close-mobile");
    const iconOpenMoblile = document.querySelector(".btn-open-nav");
    const nav = document.querySelector("header nav");
    const ul = nav.querySelector("ul");
    if (iconOpenMoblile?.classList.contains("inline")) {
      nav?.classList.replace("hidden", "flex");
      ul?.classList.add("nav-mobile");
      iconcloseMobile?.classList.replace("hidden", "inline");
      iconOpenMoblile?.classList.replace("inline", "hidden");
    } else {
      nav?.classList.replace("flex", "hidden");
      ul?.classList.remove("nav-mobile");
      iconcloseMobile?.classList.replace("inline", "hidden");
      iconOpenMoblile?.classList.replace("hidden", "inline");
    }
  };
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
                    nameBTN="btnLogin"
                    bgColor="bg-white"
                    color="text-black"
                    title="Đăng nhập"
                  />
                </div>
              </div>

              <div className="block md:hidden btnOpenMobile ease-in-out">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="btn-open-nav h-5 w-5 inline"
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
                  <svg
                    className="close-mobile hidden"
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M2.21999 18.3052L11.22 10.3052M11.22 10.3052L20.22 2.30518M11.22 10.3052L2.21999 2.30518M11.22 10.3052L20.22 18.3052"
                      strokeWidth="3.56438"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
