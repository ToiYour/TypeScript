import { useEffect } from "react";
const ModalDelete = () => {
  useEffect(() => {
    const modalDel = document.querySelector(".modal-delete");
    const btnCancel = document.querySelector(
      ".btn-modal-delete-cancel"
    ) as HTMLElement;
    window.onclick = (e) => {
      if (e.target == modalDel) {
        modalDel?.classList.replace("flex", "hidden");
      }
    };
    btnCancel.onclick = () => {
      modalDel?.classList.replace("flex", "hidden");
    };
  });
  return (
    <div className="modal-delete hidden bg-slate-800 bg-opacity-50  justify-center items-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">
          Bạn chắc chắn xoá chứ
        </h1>
        <button className="btn-modal-delete-remove bg-red-500 px-4 py-2 rounded-md text-md text-white">
          Xoá
        </button>
        <button className="btn-modal-delete-cancel bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
          Huỷ
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
