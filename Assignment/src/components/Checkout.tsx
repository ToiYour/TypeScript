const Checkout = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto font-[sans-serif] bg-gray-50 p-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#333] text-center">
            Thanh toán
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-[#333]">
                Chọn phương thức thanh toán của bạn
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    defaultChecked="true"
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                    />
                  </label>
                </div>
              </div>
              <form className="mt-8">
                <div className="grid gap-6">
                  <div className="grid-cols-1 grow">
                    <input
                      type="number"
                      placeholder="Số thẻ"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Tên của chủ thẻ"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Mã"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:border-l lg:pl-8">
              <h3 className="text-xl font-bold text-[#333]">Đơn hàng</h3>
              <ul className="text-[#333] mt-6 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Hà Nội-Hải Phòng<span className="ml-auto font-bold">0đ</span>
                </li>

                <li className="flex flex-wrap gap-4 text-base font-bold border-t pt-4">
                  Tổng <span className="ml-auto">0đ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              type="button"
              className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
