import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { updateBusHou } from "../../../api/bushou";
import { IBusHouse } from "../../../interfaces";

const UpdateBushouse = () => {
  const { id } = useParams();
  const datBushouse = useLoaderData() as IBusHouse;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBusHouse>({
    defaultValues: {
      adress: datBushouse.adress,
      name: datBushouse.name,
      phone: datBushouse.phone,
    },
  });
  const onSubmit: SubmitHandler<IBusHouse> = async (data) => {
    try {
      await updateBusHou(id as string, data);
      toast.success("Cập nhập nhà xe thành công", {
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
    } catch (error) {
      toast.warn("Thêm mới nhà xe thất bại", {
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
    }
  };
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
                to={"/admin/bushouse"}
                className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
              >
                Nhà xe
              </Link>
            </li>
            <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
              /
            </span>
            <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                Cập nhập nhà xe
              </p>
            </li>
          </ol>
        </nav>
      </div>
      <h2 className="font-semibold text-3xl text-center mb-8">
        Cập nhập nhà xe
      </h2>
      <div className="flex justify-between items-center">
        <Link
          to={"/admin/buses/add"}
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-12 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Thêm mới chuyến xe
        </Link>
        <Link to={"/admin/bushouse"} className="underline mr-5">
          Danh sách nhà xe
        </Link>
      </div>
      <form
        method="post"
        className="mt-5 ml-auo space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            {...register("name", {
              required: "Vui lòng nhập tên nhà xe",
            })}
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("adress", {
              required: "Vui lòng nhập địa chỉ nhà xe",
            })}
            type="text"
            placeholder="Địa chỉ"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          {errors.adress && (
            <span className="text-red-600">{errors.adress.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("phone", {
              required: "Vui lòng nhập số điện thoại nhà xe",
            })}
            type="text"
            placeholder="Số điện thoại"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBushouse;
