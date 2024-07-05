import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchBooking } from "../../api/booking";
import { IBookingData } from "../../interfaces";
import { useEffect, useState } from "react";
import moment from "moment";
interface IorderSearch {
  id: string;
  phone: string;
}
const SearchOrder = () => {
  const money = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [searchOrder, setSearchOrder] = useSearchParams();
  const [orderData, setOrderData] = useState<IBookingData>({});
  useEffect(() => {
    (async () => {
      const { data } = await getSearchBooking(location.search);
      setOrderData(data);
    })();
  }, [searchOrder]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IorderSearch>();
  const onSubmit: SubmitHandler<IorderSearch> = (data) => {
    setSearchOrder({ ...data });
  };
  if (searchOrder.get("id") && searchOrder.get("phone")) {
    console.log(orderData);

    if (!orderData._id) {
      return (
        <div className="flex flex-col justify-center items-center gap-y-5 py-20">
          <div>
            <img
              className="mx-auto"
              src="./img/notrips.png"
              alt=""
              width={450}
            />
            <h2 className="text-center font-bold text-xl">
              Không tìm thấy thông tin đơn hàng
            </h2>
            <p className="text-center text-sm">
              Rất tiếc, chúng tôi không tìm được những gì bạn đang tìm kiếm. Vui
              lòng kiểm tra lại sau.
            </p>
          </div>
          <Link
            to={"/order/search"}
            className="text-center text-white font-semibold rounded-md bg-blue-500 py-2 px-20"
          >
            Xem thông tin đơn hàng khác
          </Link>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-gradient-to-r from-sky-200 to-red-100 py-20">
        <h1 className="text-5xl font-bold text-center pb-10">
          <span className="text-blue-700">Thông tin</span> đơn hàng
        </h1>
        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl pb-4">
                1. Thông tin khách hàng & Thanh toán{" "}
              </h1>
              <ul>
                <li>Họ tên: {orderData.name}</li>
                <li>Email: {orderData.email}</li>
                <li>Số điện thoại: {orderData.phone}</li>
                <li>
                  Tổng giá vé:{" "}
                  <span className="text-red-500 pr-3">
                    {money.format(orderData.price || 0)}
                  </span>
                  (x
                  {orderData.quantity})
                </li>
                <li>
                  Trạng thái thanh toán:{" "}
                  {orderData.payment == "Tiền mặt"
                    ? "Chưa thanh toán"
                    : "Đã thanh toán"}
                </li>
                <li>Phương thức thanh toán: {orderData.payment}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px]  shadow-lg bg-white   md: rounded-xl md:p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path d="M24,9v3a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V9H2V6H22V9ZM2,16H22v6H20v2H15V22H9v2H4V22H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,20ZM7,20a1,1,0,0,0,0-2A1,1,0,0,0,7,20ZM9,3h6V4h6.983a2.978,2.978,0,0,0-1.8-2.531c-3.673-1.9-12.695-1.893-16.358,0A2.978,2.978,0,0,0,2.017,4H9Z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">2. Chuyến Xe</h1>
              <ul>
                <li>Điểm xuất phát: {orderData.tripId?.fromStationId.name}</li>
                <li>Điểm đến: {orderData.tripId?.toStationId.name}</li>
                <li>
                  Khởi hành:{" "}
                  {moment.utc(orderData.tripId?.startTime).format("LT L")}
                </li>
                <li>Giá vé: {money.format(orderData.tripId?.price || 0)}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl  gap-10">
            <div className="w-full md:w-[750px] flex justify-center md:justify-end">
              <div className="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path d="M24,9v3a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V9H2V6H22V9ZM2,16H22v6H20v2H15V22H9v2H4V22H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,20ZM7,20a1,1,0,0,0,0-2A1,1,0,0,0,7,20ZM9,3h6V4h6.983a2.978,2.978,0,0,0-1.8-2.531c-3.673-1.9-12.695-1.893-16.358,0A2.978,2.978,0,0,0,2.017,4H9Z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white w-max  min-w-64  shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">3. Nhà xe </h1>
              <ul>
                <li>Nhà xe: {orderData.tripId?.busHouseId.name}</li>
                <li>Địa chỉ: {orderData.tripId?.busHouseId.adress}</li>
                <li>Số điện thoại: {orderData.tripId?.busHouseId.phone}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path d="M24,9v3a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V9H2V6H22V9ZM2,16H22v6H20v2H15V22H9v2H4V22H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,20ZM7,20a1,1,0,0,0,0-2A1,1,0,0,0,7,20ZM9,3h6V4h6.983a2.978,2.978,0,0,0-1.8-2.531c-3.673-1.9-12.695-1.893-16.358,0A2.978,2.978,0,0,0,2.017,4H9Z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">4.Bến xe. </h1>
              <ul>
                <li>Nhà xe: {orderData.tripId?.busStationId.name}</li>
                <li>Địa chỉ: {orderData.tripId?.busStationId.adress}</li>
                <li>Số điện thoại: {orderData.tripId?.busStationId.phone}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px]  h-[120px] bg-white   shadow-lg  rounded-xl p-4 flex justify-center items-center">
                <svg
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path d="M17,10.039c-3.859,0-7,3.14-7,7,0,3.838,3.141,6.961,7,6.961s7-3.14,7-7c0-3.838-3.141-6.961-7-6.961Zm0,11.961c-2.757,0-5-2.226-5-4.961,0-2.757,2.243-5,5-5s5,2.226,5,4.961c0,2.757-2.243,5-5,5Zm1.707-4.707c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1-1c-.188-.188-.293-.442-.293-.707v-2c0-.552,.447-1,1-1s1,.448,1,1v1.586l.707,.707Zm5.293-10.293v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v1H11c.552,0,1,.448,1,1s-.448,1-1,1H2v9c0,1.654,1.346,3,3,3h4c.552,0,1,.448,1,1s-.448,1-1,1H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">5. Thời gian đặt vé. </h1>
              <p>
                Thời gian: {moment.utc(orderData.createdAt).format("HH:mm:ss")}
              </p>
              <p>
                Ngày: {moment.utc(orderData.createdAt).format("DD-MM-YYYY ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex pt-10 justify-center w-full max-w-2xl mx-auto">
      <div className="bg-white px-8 py-6 min-w-full">
        <h1 className="text-2xl font-bold text-center mb-4 ">
          Nhập thông tin đơn hàng
        </h1>
        <form action="#" className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="idorder"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Mã đơn hàng
            </label>
            <input
              {...register("id", {
                required: "Vui lòng nhập mã đơn hàng của bạn",
                minLength: {
                  value: 24,
                  message: "Mã đơn hàng phải đủ 24 ký tự",
                },
                maxLength: {
                  value: 24,
                  message: "Mã đơn hàng không vượt quá 24 ký tự",
                },
              })}
              type="text"
              id="idorder"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder=""
            />
            {errors._id && <p className="text-red-500">{errors._id.message}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Số điện thoại
            </label>
            <input
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại",
                pattern: {
                  value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                  message: "Số điện thoại không đúng định dạng",
                },
              })}
              type="text"
              id="phone"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder=""
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Xem thông tin đơn hàng
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchOrder;
