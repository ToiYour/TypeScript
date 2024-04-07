import { useForm, SubmitHandler } from "react-hook-form";
import { IUser } from "../../interfaces";
import { toast, Zoom, ToastContainer } from "react-toastify";
import { apiLogin } from "../../api/user";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = async (user) => {
    const { data } = await apiLogin(user);
    if (data.isLogin) {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/admin");
    } else {
      setError("root", { message: data.message });
    }
  };
  errors.root &&
    toast.warn(`${errors.root.message}`, {
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
  errors.email &&
    toast.warn(`${errors.email.message}`, {
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
  errors.password &&
    toast.warn(`${errors.password.message}`, {
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
  return (
    <>
      <ToastContainer />
      <div className="flex h-screen w-full items-center justify-center bg-gray-300 bg-cover bg-no-repeat">
        <div className="rounded-xl bg-white bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="">
            <div className="mb-8 flex flex-col items-center">
              <img
                className="object-cover rounded-full"
                src="https://i.pinimg.com/564x/d2/77/94/d27794a6aeb4c6df99a137f76be6eaf4.jpg"
                width={150}
                alt=""
                srcSet=""
              />
              <span className="text-gray-900">Nhập chi tiết đăng nhập</span>
            </div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 text-lg">
                <input
                  {...register("email", {
                    required: "Vui lòng nhập Email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Định dạng email không hợp lệ",
                    },
                  })}
                  className="rounded-3xl border-none bg-white text-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  placeholder="id@email.com"
                />
              </div>
              <div className="mb-4 text-lg">
                <input
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                  })}
                  className="rounded-3xl border-none bg-white text-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-white text-black bg-opacity-50 px-10 py-2  shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
