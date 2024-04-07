import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IDataCombobox, IFormfields } from "../../../interfaces";
import ButtonAdmin from "../Button";
import Input from "./Input";
import Select from "./Select";
import { createTrips } from "../../../api/trips";
import { toast, Bounce } from "react-toastify";
const AddNewTrip = () => {
  const navigate = useNavigate();
  const dataCombobox = useLoaderData() as IDataCombobox;
  // Đăng ký fields
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormfields>();
  // handleSubmit
  const onSubmit: SubmitHandler<IFormfields> = async (data) => {
    try {
      await createTrips(data);
      toast.success("Thêm mới chuyến xe thành công!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/admin/buses");
    } catch (error) {
      console.log(error);
    }
  };

  // UI
  return (
    <div className="">
      <div className="capitalize mb-5">
        <nav aria-label="breadcrumb" className="w-max">
          <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
            <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
              <Link to={"/admin"}>
                <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                  dashboard
                </p>
              </Link>
              <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                /
              </span>
            </li>
            <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
              <Link
                to={"/admin/buses"}
                className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
              >
                Chuyến xe
              </Link>
            </li>
            <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
              /
            </span>
            <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                Thêm mới chuyến xe
              </p>
            </li>
          </ol>
        </nav>
      </div>
      <h2 className="font-semibold text-3xl text-center mb-8">
        Thêm mới chuyến xe
      </h2>
      <div className="flex justify-between items-center">
        <Link to={"/admin/bushouse/add"}>
          <ButtonAdmin title="Thêm mới nhà xe" />
        </Link>
        <Link to={"/admin/buses"} className="underline mr-5">
          Danh sách chuyến xe
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-center items-end py-8 px-11 mt-4 border-2 border-gray-700 rounded-lg"
      >
        <div className="grow w-full grid gap-y-5 mb-7">
          <div className="grid grid-cols-3 gap-x-8">
            <div className="flex flex-col justify-end items-start">
              <label htmlFor="busHouseId">Nhà xe</label>
              <Select
                register={{
                  ...register("busHouseId", {
                    required: "Vui lòng chọn nhà xe",
                  }),
                }}
                name="busHouseId"
                optionTitle="--Chọn nhà xe--"
                data={dataCombobox.garage}
              />
              {errors.busHouseId && (
                <span className="text-red-600">
                  {errors.busHouseId.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <div className="">
              <label htmlFor="startTime">Thời gian bắt đầu</label>
              <input
                {...register("startTime", {
                  required: "Vui lòng nhập thời gian bắt đầu",
                })}
                min={moment().format("YYYY-MM-DD HH:mm")}
                defaultValue={moment().format("YYYY-MM-DD HH:mm")}
                type="datetime-local"
                className="mt-1.5 py-4 px-3 w-full rounded-lg border-2 border-gray-300 text-gray-700 sm:text-sm"
              />
              {/* <Input
                register={{
                  ...register("startTime", {
                    required: "Vui lòng nhập thời gian bắt đầu",
                    validate: {
                      biggerTime: (value) => {
                        const selectTime = new Date(value).getTime();
                        const currentTime = new Date().getTime();
                        if (selectTime < currentTime) {
                          return "Không thể nhập thời gian trước giờ hiện tại!!!";
                        }
                        return true;
                      },
                    },
                  }),
                }}
                style={{ name: "startTime", type: "datetime-local",min={moment().format("YYYY-MM-DD HH:mm")},default={moment().format("YYYY-MM-DD HH:mm")} }}
              /> */}
              {errors.startTime && (
                <span className="text-red-600">{errors.startTime.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="seats">Số ghế</label>
              <Input
                register={{
                  ...register("seats", {
                    required: "Vui lòng nhập số ghế",
                    validate: (value) =>
                      +value <= 0 ? "Số ghế phải lớn hơn 0" : true,
                  }),
                }}
                style={{ name: "seats", type: "number" }}
              />
              {errors.seats && (
                <span className="text-red-600">{errors.seats.message}</span>
              )}
            </div>
            <div className="">
              <label htmlFor="price">Giá</label>

              <Input
                register={{
                  ...register("price", {
                    required: "Vui lòng nhập giá",
                    validate: (value) =>
                      +value <= 0 ? "Giá phải lớn hơn 0" : true,
                  }),
                }}
                style={{ name: "price", type: "number" }}
              />
              {errors.price && (
                <span className="text-red-600">{errors.price.message}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <div className="flex flex-col justify-end items-start">
              <label htmlFor="">Bến xe</label>
              <Select
                register={{
                  ...register("busStationId", {
                    required: "Vui lòng chọn bến xe",
                  }),
                }}
                name="busStationId"
                optionTitle="--Chọn bến xe--"
                data={dataCombobox.busStation}
              />
              {errors.busStationId && (
                <span className="text-red-600">
                  {errors.busStationId.message}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="fromStationId">Điểm đi</label>
              <Select
                register={{
                  ...register("fromStationId", {
                    required: "Vui lòng chọn điểm đi",
                  }),
                }}
                name="fromStationId"
                optionTitle="--Chọn điểm đi--"
                data={dataCombobox.station}
              />
              {errors.fromStationId && (
                <span className="text-red-600">
                  {errors.fromStationId.message}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="toStationId">Điểm đến</label>
              <Select
                register={{
                  ...register("toStationId", {
                    required: "Vui lòng chọn điểm đến",
                  }),
                }}
                name="toStationId"
                optionTitle="--Chọn điểm đến--"
                data={dataCombobox.station}
              />
              {errors.toStationId && (
                <span className="text-red-600">
                  {errors.toStationId.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <ButtonAdmin title="Thêm mới" />
      </form>
    </div>
  );
};

export default AddNewTrip;
