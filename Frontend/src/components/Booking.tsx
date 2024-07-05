import axios from "axios";
import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { createBooking } from "../api/booking";
import { IBooking, ITripItem } from "../interfaces";
const Booking = () => {
  const navigate = useNavigate();
  const trip = useLoaderData() as ITripItem;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBooking>();
  const onSubmit: SubmitHandler<IBooking> = async (booking) => {
    const { payment = 0, ...infoBooking } = booking;
    if (+payment == 0) {
      const { data } = await createBooking({
        ...infoBooking,
        payment: "Tiền mặt",
      });

      navigate(`/paymentsuccess/${data._id}`);
    } else {
      console.log(infoBooking);

      axios
        .post("http://localhost:8888/order/create_payment_url", {
          amount: infoBooking.price,
          orderId: infoBooking._id,
        })
        .then(({ data }) => {
          location.href = data;
        });
    }
  };
  const openModal = () => {
    const modal = document.querySelector(".main-modal") as HTMLElement;
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.style.display = "flex";
  };
  const endTime = (time: string) => {
    const newTime = moment
      .utc(time)
      .add(1, "hour")
      .add(30, "minutes")
      .format("HH:mm");
    return newTime;
  };
  const inputChange = () => {
    const input = document.querySelector(
      'input[name="custom-input-number"]'
    ) as HTMLInputElement;
    const count = Number(input.value);
    if (count <= 1) {
      input.value = `${1}`;
      toast.warn("Số lượng vé không thể nhỏ hơn 1", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
    if (count >= trip.seats) {
      input.value = `${trip.seats}`;
      toast.warn("Đã tối đa số lượn vé hiện có", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
    handleChangeTotal();
  };
  function decrement() {
    const input = document.querySelector(
      'input[name="custom-input-number"]'
    ) as HTMLInputElement;
    let count = Number(input.value);
    count--;
    if (count <= 1) {
      toast.warn("Số lượng vé không thể nhỏ hơn 1", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
    count = Math.max(1, count);
    input.value = `${count}`;
    handleChangeTotal();
  }

  function increment() {
    const input = document.querySelector(
      'input[name="custom-input-number"]'
    ) as HTMLInputElement;
    let value = Number(input.value);
    value++;
    if (value >= trip.seats) {
      toast.warn("Đã tối đa số lượn vé hiện có", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
    value = Math.min(trip.seats, value);
    input.value = `${value}`;
    handleChangeTotal();
  }
  const money = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const handleChangeTotal = () => {
    const priceToPay = document.querySelectorAll(".price-to-pay");
    for (const item of priceToPay) {
      item.innerHTML = `${money.format(totalPrice())}`;
    }
    const totalCount = document.querySelector("#total") as HTMLElement;
    if (totalCount) {
      const input = document.querySelector(
        'input[name="custom-input-number"]'
      ) as HTMLInputElement;
      const value = Number(input.value);
      totalCount.innerHTML = `x${value}`;
    }
  };
  const totalPrice = () => {
    const input = document.querySelector(
      'input[name="custom-input-number"]'
    ) as HTMLInputElement;
    if (input) {
      const value = Number(input.value);
      return +value * trip.price;
    }
    return trip.price;
  };
  return (
    <div className="max-w-screen-lg mx-auto py-5">
      <h2 className="text-2xl font-bold">Đặt chỗ của tôi</h2>
      <p className="text-gray-500 text-lg">
        Điền thông tin và xem lại đặt chỗ.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-x-8 my-7">
          <div className="col-span-3 space-y-8">
            <div className="flex justify-center items-center px-5 py-2 space-x-5 border-2 border-gray-200 rounded-md">
              <img src="./img/bookinglogin.png" alt="" />
              <div className=" space-y-2">
                <p className="font-bold">
                  Đăng nhập hoặc Đăng ký và tận hưởng ưu đãi dành riêng cho
                  thành viên
                </p>
                <p className="flex items-center gap-x-2">
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/513ab8104dcf3ae7a42419cba432351d.svg"
                    alt=""
                  />
                  Đặt chỗ nhanh và dễ dàng hơn với Passenger Quick Pick
                </p>
                <button
                  onClick={openModal}
                  className="font-bold text-blue-500 py-3"
                >
                  Đăng nhập hoặc Đăng ký
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
              <div className="border-2 border-gray-200 rounded-md ">
                <p className="font-semibold text-lg border-b-2 border-gray-200 px-5 py-2">
                  Thông tin liên hệ (nhận vé/phiếu thanh toán)
                </p>
                <div className="p-5 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-zinc-900 "
                    >
                      Họ tên
                    </label>
                    <div className="flex">
                      <input
                        {...register("name", {
                          required: "Vui lòng nhập họ tên",
                        })}
                        type="text"
                        id="name"
                        className=" rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="elonmusk"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-x-10">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium  text-zinc-900"
                      >
                        Điện thoại di động
                      </label>
                      <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 25 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.2866 17.8429L18.8179 15.4992C18.5843 15.3996 18.3246 15.3786 18.078 15.4394C17.8315 15.5002 17.6113 15.6394 17.4507 15.8361L15.0288 18.7951C11.2279 17.003 8.16904 13.9441 6.37695 10.1432L9.33594 7.72136C9.53305 7.56105 9.67256 7.34088 9.73335 7.09419C9.79414 6.8475 9.7729 6.58771 9.67285 6.35417L7.3291 0.885422C7.21929 0.633668 7.02508 0.42812 6.77996 0.30422C6.53483 0.18032 6.25416 0.145835 5.98633 0.206711L0.908203 1.37859C0.649985 1.43821 0.419602 1.5836 0.254656 1.79103C0.0897096 1.99845 -5.94829e-05 2.25566 2.95713e-08 2.52068C2.95713e-08 15.0451 10.1514 25.1769 22.6562 25.1769C22.9213 25.1771 23.1787 25.0874 23.3862 24.9224C23.5937 24.7575 23.7392 24.527 23.7988 24.2687L24.9707 19.1906C25.0312 18.9215 24.996 18.6397 24.8711 18.3937C24.7463 18.1477 24.5396 17.953 24.2866 17.8429Z"
                              fill="black"
                            />
                          </svg>
                        </div>
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
                          className="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                          placeholder="09xxxxxxxx"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium  text-zinc-900"
                      >
                        Email
                      </label>
                      <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5  text-zinc-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <input
                          {...register("email", {
                            required: "Vui lòng nhập email",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Email không đúng định dạng",
                            },
                          })}
                          type="text"
                          id="input-group-1"
                          className="bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                          placeholder="name@flowbite.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">Tóm tắt</h2>
              <div className="rounded-md border-2 border-gray-200 ">
                <div className="flex font-semibold text-lg justify-between items-center border-b-2 border-gray-200 p-4">
                  <span>Giá bạn phải trả</span>{" "}
                  <span className="text-red-500 price-to-pay">
                    {money.format(totalPrice())}
                  </span>
                </div>
                <input
                  type="text"
                  value={totalPrice()}
                  hidden
                  {...register("price")}
                />
                <div className="flex font-semibold text-lg justify-between items-center p-4">
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold">{trip.fromStationId.name}</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-id="IcTripOneWay"
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
                    <p className="font-semibold">{trip.toStationId.name}</p>{" "}
                    <span id="total" className="px-1">
                      x1
                    </span>
                  </div>
                  <span className="text-red-500 price-to-pay">
                    {money.format(totalPrice())}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <input
                type="text"
                hidden
                value={trip._id}
                {...register("tripId")}
              />
              <button
                type="submit"
                className="text-white py-2 px-16 bg-orange-500 font-bold rounded"
              >
                Tiếp tục
              </button>
            </div>
          </div>
          {/* Thông tin trips */}
          <div className="col-span-2 h-min gap-y-5">
            <div className="border-2 border-gray-200 p-3 rounded-lg">
              <div className="flex items-center justify-start space-x-2 mb-5">
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
                  <p className="font-semibold">{trip.fromStationId.name}</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcTripOneWay"
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
                  <p className="font-semibold">{trip.toStationId.name}</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg">
                {moment(trip.startTime).format("dddd, DD/MM/YYYY")}
              </h3>
              <div className="info-trips">
                <p className="font-semibold text-lg">
                  Nhà xe: {trip.busHouseId.name}
                </p>
                <div className="bottom-info flex flex-col md:flex-row  justify-between items-start md:items-center mt-4">
                  <div className="relative pl-4">
                    <div className="absolute left-0 top-[6px]">
                      <svg
                        width={13}
                        height={74}
                        viewBox="0 0 13 74"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_711)">
                          <path
                            d="M6.55005 16.8571V56.2857"
                            stroke="#787878"
                            strokeWidth="1.71429"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.5501 16C9.15373 16 11.2644 13.8893 11.2644 11.2857C11.2644 8.68207 9.15373 6.57141 6.5501 6.57141C3.94647 6.57141 1.83582 8.68207 1.83582 11.2857C1.83582 13.8893 3.94647 16 6.5501 16Z"
                            stroke="#484848"
                            strokeWidth="2.57143"
                          />
                          <path
                            d="M6.54999 55C5.1989 54.9893 3.89871 55.5148 2.93459 56.4614C1.97048 57.408 1.42116 58.6984 1.40713 60.0494C1.40463 60.7598 1.55825 61.4621 1.85713 62.1066C3.07316 64.4529 4.57674 66.6386 6.33313 68.6132C6.36032 68.6438 6.3937 68.6684 6.43109 68.6852C6.46847 68.7021 6.509 68.7107 6.54999 68.7107C6.59099 68.7107 6.63151 68.7021 6.6689 68.6852C6.70628 68.6684 6.73966 68.6438 6.76685 68.6132C8.52259 66.6409 10.0261 64.4578 11.2428 62.1143C11.5418 61.4698 11.6954 60.7676 11.6928 60.0572C11.6809 58.7047 11.1324 57.4124 10.1681 56.4642C9.20376 55.5159 7.90241 54.9893 6.54999 55ZM6.54999 62.6714C5.84812 62.6771 5.17264 62.4042 4.67176 61.9125C4.17088 61.4208 3.88552 60.7504 3.87828 60.0486C3.87828 59.34 4.15976 58.6604 4.6608 58.1594C5.16185 57.6583 5.84141 57.3769 6.54999 57.3769C7.25857 57.3769 7.93814 57.6583 8.43918 58.1594C8.94022 58.6604 9.22171 59.34 9.22171 60.0486C9.21446 60.7504 8.9291 61.4208 8.42822 61.9125C7.92735 62.4042 7.25187 62.6771 6.54999 62.6714Z"
                            fill="#787878"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_711">
                            <rect
                              width={12}
                              height={74}
                              fill="white"
                              transform="translate(0.550049)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="">
                      <p className="font-semibold text-xl">
                        {moment.utc(trip.startTime).format("HH:mm")}{" "}
                        <span className="text-xs text-gray-500">
                          ({moment(trip.startTime).format("dddd, DD/MM/YYYY")})
                        </span>{" "}
                        •{" "}
                        <span className="font-bold text-sm">
                          {trip.fromStationId.name}
                        </span>
                      </p>
                      <span className="text-sm text-[#707070]">1h30m</span>
                      <p className="font-semibold text-xl text-gray-500">
                        {endTime(trip.startTime)}
                        <span className="text-xs text-gray-500">
                          ({moment(trip.startTime).format("dddd, DD/MM/YYYY")})
                        </span>{" "}
                        •{" "}
                        <span className="font-bold text-sm">
                          {trip.toStationId.name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-number-input  w-32 mt-5">
                <label
                  htmlFor="custom-input-number"
                  className="w-full text-gray-700 text-sm font-semibold"
                >
                  Số lượng vé
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border-2 border-gray-200">
                  <button
                    onClick={decrement}
                    data-action="decrement"
                    className="  text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    {...register("quantity")}
                    type="number"
                    onInput={inputChange}
                    className="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    min={1}
                    defaultValue={1}
                  />
                  <button
                    onClick={increment}
                    data-action="increment"
                    className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4 mt-5">
                <div className="flex items-start gap-x-3">
                  <img
                    className="pt-1"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/721a32c1f29c2034bf8f5659dc65b73e.svg"
                    alt=""
                  />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Không đổi lịch</p>
                    <span>Không thể đổi lịch sau khi đặt chỗ.</span>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <img
                    className="pt-1"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/1b64ae3d7abfa4af47d680c20adb0ba2.svg"
                    alt=""
                  />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Có thể hoàn trả</p>
                    <span>
                      Để hủy vé và yêu cầu hoàn tiền, hãy liên hệ với chúng tôi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 space-y-3">
              <h2 className="font-semibold text-xl">Phương thức thanh toán</h2>
              <div className="border-2 border-gray-200 rounded-md py-2 px-5">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    className="p-2 size-5"
                    id="payment-before"
                    defaultValue={0}
                    defaultChecked
                    {...register("payment")}
                  />
                  <label htmlFor="payment-before">Thanh toán sau</label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    defaultValue={1}
                    className="p-2 size-5"
                    id="payment-onl"
                    {...register("payment")}
                  />
                  <label htmlFor="payment-onl">Thanh toán VNPay </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
