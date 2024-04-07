import { Link } from "react-router-dom";
import moment from "moment";
import { ITripItem } from "../../../interfaces";
import { toast, Bounce } from "react-toastify";
import { deleteTrips } from "../../../api/trips";
import { getIsBooking } from "../../../api/booking";
const ItemTrip = (props: ITripItem) => {
  const handleDelete = async (
    id: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    try {
      const targetElement = event.target as HTMLElement;
      if (targetElement) {
        const itemTrip = targetElement.closest("button").parentNode.parentNode
          .parentNode as HTMLElement;
        const { data } = await getIsBooking(id);
        if (data._id) {
          toast.error(
            "Chuyến này đã có người đặt. Bạn không thể xoá chuyến này!",
            {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            }
          );
        } else {
          await deleteTrips(id);
          itemTrip.remove();
          toast.success("Xoá chuyến xe thành công", {
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
    } catch (error) {
      toast.error("Xoá chuyến xe thất bại!", {
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
    <>
      <div className="item-trip group/trip px-8 py-6 bg-gray-100 border-2 border-gray-500 rounded-lg space-y-4 shadow-xl">
        <div className="flex justify-between ">
          <h2 className="font-semibold text-2xl">
            Mã chuyến: <span>{props._id}</span>
          </h2>
          <div className="inline-flex items-center rounded-md shadow-sm invisible group-hover/trip:visible">
            <button
              onClick={(event) => {
                return (
                  confirm("Bạn chắc chắn Xoá chứ") &&
                  handleDelete(props._id, event)
                );
              }}
              data-id={props._id}
              className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg  font-medium px-4 py-2 inline-flex space-x-1 items-center"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <span>Delete</span>
            </button>
            <Link
              to={`/admin/buses/update/${props._id}`}
              className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200  font-medium px-4 py-2 inline-flex space-x-1 items-center"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
              <span>Edit</span>
            </Link>
            <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <span>Lịch sử chuyến</span>
            </button>
          </div>
        </div>
        {/* title */}
        <div className="pr-36 text-start">
          {/* title */}
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl">
              {props.fromStationId.name}-{props.toStationId.name}
            </h2>
            <p className="font-semibold text-xl">
              SĐT nhà xe:
              <span className="font-normal">{props.busHouseId.phone}</span>
            </p>
          </div>
          {/*  */}
          <div className="flex items-center">
            <p className="font-semibold text-xl">
              Số ghê còn trống:{" "}
              <span className="font-normal">{props.seats}</span>
            </p>
          </div>
          {/*  */}
          <div className="flex justify-between  items-center ">
            <p className="font-semibold text-xl">
              Khởi hành:{" "}
              <span className="font-normal">
                {moment.utc(props.startTime).format("HH:mm")} ngày{" "}
                {moment(props.startTime).format("DD MM YYY")}
              </span>
            </p>
            <p className="font-semibold text-xl">
              Bến xe:{" "}
              <span className="font-normal">{props.busStationId.name}</span>
            </p>
          </div>
          {/*  */}
          <div className="flex justify-between  items-center ">
            <p className="font-semibold text-xl">
              Địa điểm:{" "}
              <span className="font-normal">{props.fromStationId.name}</span>
            </p>
            <p className="font-semibold text-xl">
              Điểm đến:{" "}
              <span className="font-normal">{props.toStationId.name}</span>
            </p>
          </div>
          {/* title */}
        </div>
      </div>
    </>
  );
};

export default ItemTrip;
