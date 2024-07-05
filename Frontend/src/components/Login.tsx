import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Zoom } from "react-toastify";
import { apiLogin } from "../api/user";
import { IUser } from "../interfaces";

const Login = () => {
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
      toast.success(`Bạn đã đăng nhập thành công`, {
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
    <form action="/" onSubmit={handleSubmit(onSubmit)}>
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">
          Email
        </label>
        <input
          {...register("email", {
            required: "Vui lòng nhập Email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Định dạng email không hợp lệ",
            },
          })}
          type="text"
          id="username"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
      </div>
      {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">
          Mật khẩu
        </label>
        <input
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
          })}
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autoComplete="off"
        />
      </div>
      {/* Remember Me Checkbox */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="text-blue-500"
        />
        <label htmlFor="remember" className="text-gray-600 ml-2">
          Nhớ mật khẩu
        </label>
      </div>
      {/* Forgot Password Link */}
      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">
          Quên mật khẩu
        </a>
      </div>
      {/* Login Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default Login;
