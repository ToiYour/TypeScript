import React, { useEffect } from "react";
import Login from "./Login";

const Modal = () => {
  useEffect(() => {
    const closeButton = document.querySelector(".modal-close");
    closeButton?.addEventListener("click", modalClose);
    window.onclick = function (event) {
      const modal = document.querySelector(".main-modal");
      if (event.target == modal) modalClose();
    };
  });
  const modalClose = () => {
    const modal = document.querySelector(".main-modal");
    modal.classList.remove("fadeIn");
    modal.classList.add("fadeOut");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };
  return (
    <div
      className="main-modal hidden fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)" }}
    >
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/*Title*/}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Đăng nhập</p>
            <div className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          {/*Body*/}
          <div className="my-5">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
