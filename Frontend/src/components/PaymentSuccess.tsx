import { Link, useLoaderData } from "react-router-dom";
import { IBookingData } from "../interfaces";
import moment from "moment";

const PaymentSuccess = () => {
  const Booking = useLoaderData() as IBookingData;
  console.log(Booking);
  const money = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className="bg-white h-screen ">
      <div className="bg-white  pt-16 mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Đặt vé thành công!
          </h3>
          <div className="info space-y-3">
            <p>
              <span className="font-semibold">Mã đặt chỗ:</span>{" "}
              <span>{Booking._id}</span>
            </p>
            <div className="flex items-center justify-center space-x-2 my-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcProductBusFill"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 19.75V20.75C5 21.7165 5.7835 22.5 6.75 22.5C7.7165 22.5 8.5 21.7165 8.5 20.75V20H15.5V20.75C15.5 21.7165 16.2835 22.5 17.25 22.5C18.2165 22.5 19 21.7165 19 20.75V19.75C19.5523 19.75 20 19.3023 20 18.75V12C20.5523 12 21 11.5523 21 11V9C21 8.44772 20.5523 8 20 8V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V8C3.44772 8 3 8.44772 3 9V11C3 11.5523 3.44772 12 4 12V18.75C4 19.3023 4.44772 19.75 5 19.75ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H8ZM6 9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9V13C18 13.5523 17.5523 14 17 14H7C6.44772 14 6 13.5523 6 13V9ZM6 17C6 16.4477 6.44772 16 7 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17ZM14 17C14 16.4477 14.4477 16 15 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H15C14.4477 18 14 17.5523 14 17Z"
                  fill="#20BF55"
                ></path>
              </svg>
              <div className="flex items-center space-x-2">
                <p className="font-semibold">
                  {Booking.tripId?.fromStationId.name}
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-id="IcBookingOneWay"
                >
                  <path
                    d="M7 12H21M21 12L17 16M21 12L17 8"
                    stroke="#687176"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="5"
                    cy="12"
                    r="2"
                    stroke="#0194F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <p className="font-semibold">
                  {Booking.tripId?.toStationId.name}
                </p>
              </div>
            </div>
            <div className="font-semibold flex justify-between items-center max-w-96 mx-auto">
              <div className="flex items-center">
                <img
                  className="px-3"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a9140fa8aae6aa7c48bd924cf4522ae7.svg"
                />
                <span className="font-semibold">Bến xe</span>{" "}
              </div>
              {Booking.tripId?.busStationId.name} -{" "}
              {Booking.tripId?.busStationId.phone}
            </div>
            <div className="font-semibold flex justify-between items-center max-w-96 mx-auto">
              <div className="flex items-center">
                <img
                  className="px-3"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a9140fa8aae6aa7c48bd924cf4522ae7.svg"
                />
                <span className="font-semibold">Nhà xe</span>{" "}
              </div>
              {Booking.tripId?.busHouseId.name} -{" "}
              {Booking.tripId?.busHouseId.phone}
            </div>
            <div className="font-semibold flex justify-between items-center max-w-96 mx-auto">
              <div className="flex items-center">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7c5c4d7a3eadee1c20abaa86c60d0888.svg"
                  alt=""
                  className="px-3"
                />
                Khởi hành
              </div>
              <span className="font-normal">
                {moment.utc(Booking.tripId?.startTime).format("HH:mm")} giờ
              </span>{" "}
              <span className="font-normal">
                ngày{" "}
                {moment.utc(Booking.tripId?.startTime).format("DD.MM.YYYY")}
              </span>
            </div>
            <div className="font-semibold flex justify-between items-center max-w-[420px] mx-auto">
              <div className="flex items-center">
                <img
                  className="mx-3"
                  src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
                  width={28}
                  alt=""
                />
                Thanh toán{"  "}
                <span className="text-red-500">
                  {" "}
                  ({money.format(Booking.price || 0)})
                </span>
              </div>
              <span className="font-normal">
                {Booking.payment} (
                {Booking.payment == "Tiền mặt"
                  ? "Chưa thanh toán"
                  : "Đã thanh toán"}
                )
              </span>
            </div>
          </div>
          <p className="text-gray-600 my-2">
            Cảm ơn bạn đã tin tưởng và đặt vé của chúng tôi.
          </p>
          <p> Chúc bạn có một ngày tuyệt vời</p>
          <div className="py-10 text-center">
            <Link
              to={`/order/search?id=${Booking._id}&phone=${Booking.phone}`}
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              Xem thông tin vé
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
