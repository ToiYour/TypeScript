import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Bounce, Zoom, toast } from "react-toastify";
import { ISearchTrips } from "../../interfaces";
import Button from "../Headers/Button";
import Select from "./Select";
function errorSearch(errors: {
  fromStationId: { message: string };
  toStationId: { message: string };
  startTime: { message: string };
}) {
  {
    errors.fromStationId &&
      toast.warn(`${errors.fromStationId.message}`, {
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
    errors.toStationId &&
      toast.warn(`${errors.toStationId.message}`, {
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
    errors.startTime &&
      toast.warn(`${errors.startTime.message}`, {
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
}
const Search = () => {
  const navigate = useNavigate();
  const [seachParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchTrips>({
    defaultValues: {
      fromStationId: seachParams.get("fromStationId") || "",
      toStationId: seachParams.get("toStationId") || "",
      startTime:
        seachParams.get("startTime") || moment().format("YYYY-MM-DD HH:mm"),
    },
  });
  const onSubmit: SubmitHandler<ISearchTrips> = (data) => {
    if (data.fromStationId == data.toStationId) {
      toast.warn("Địa điểm khởi hành và điểm đến của bạn phải khác nhau", {
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
    } else {
      navigate("/search");
      console.log(data);
      setSearchParams({ ...data });
    }
  };
  errorSearch(errors);
  return (
    <>
      <div className="search-banner-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="formSearch"
          method="post"
          className="wrapper-search flex flex-col sm:flex-row justify-center items-center p-4"
        >
          <div className="flex flex-col sm:flex-row justify-stretch items-center  border-2 border-gray-200 rounded-lg mb-4 mr-0 sm:mr-4  sm:mb-0 w-full">
            <div className=" flex  justify-start items-center w-full py-2 sm:py-0 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200">
              <div className="ml-4">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                    fill="#2474E5"
                  />
                  <path
                    d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z"
                    fill="#EDF3FD"
                  />
                </svg>
              </div>
              <div className="mx-2 pb-1  min-w-[120px]">
                <Select
                  register={{
                    ...register("fromStationId", {
                      required: "Vui lòng chọn nơi xuất phát!!!",
                    }),
                  }}
                  // data={stations}
                  title="Nơi xuất phát"
                  titleOption="--Xuất phát--"
                  name="start"
                />
              </div>
            </div>
            <div className=" flex  justify-start items-center w-full py-2 sm:py-0 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200">
              <div className="ml-8">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9999 0.5C4.9599 0.5 0.399902 4.364 0.399902 10.34C0.399902 14.324 3.6039 19.04 9.9999 24.5C16.3959 19.04 19.5999 14.324 19.5999 10.34C19.5999 4.364 15.0399 0.5 9.9999 0.5ZM9.9999 12.5C8.6799 12.5 7.5999 11.42 7.5999 10.1C7.5999 8.78 8.6799 7.7 9.9999 7.7C11.3199 7.7 12.3999 8.78 12.3999 10.1C12.3999 11.42 11.3199 12.5 9.9999 12.5Z"
                    fill="#EB5757"
                  />
                  <path
                    d="M9.99951 14.0996C12.2087 14.0996 13.9995 12.3087 13.9995 10.0996C13.9995 7.89047 12.2087 6.09961 9.99951 6.09961C7.79037 6.09961 5.99951 7.89047 5.99951 10.0996C5.99951 12.3087 7.79037 14.0996 9.99951 14.0996Z"
                    fill="#FDEDED"
                  />
                </svg>
              </div>

              <div className="mx-2 pb-1 min-w-[120px]">
                <Select
                  register={{
                    ...register("toStationId", {
                      required: "Vui lòng chọn nơi đến!!!",
                    }),
                  }}
                  // data={stations}
                  title="Nơi đến"
                  titleOption="--Nơi đến--"
                  name="destination"
                />
              </div>
            </div>
            <div className=" flex  justify-start items-center w-full py-2 sm:py-0 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200">
              <div className="ml-4">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
                    fill="#2474E5"
                  />
                </svg>
              </div>

              <div className="mx-2 h-full py-3  min-w-[120px]">
                <input
                  type="datetime-local"
                  min={moment().format("YYYY-MM-DD HH:mm")}
                  defaultValue={moment().format("YYYY-MM-DD HH:mm")}
                  {...register("startTime", {
                    required: "Vui lòng chọn thời gian đi!!!",
                  })}
                />
              </div>
            </div>
            <div className="py-4 sm:py-0">
              <a
                href=""
                className="whitespace-nowrap font-semibold text-[#2474E5] px-9 "
              >
                Thêm ngày về
              </a>
            </div>
          </div>
          <div className="w-[148px]">
            <Button
              title="Tìm kiếm"
              bgColor="bg-[#FFD333]"
              color="text-black"
              py="py-4"
            />
          </div>

          {/* <button className="w-full inline-block whitespace-nowrap rounded     text-sm font-medium  hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
          Tìm kiếm
        </button> */}
        </form>
      </div>
    </>
  );
};

export default Search;
