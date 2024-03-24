import React from "react";

const Login = () => {
  return (
    <form action="#" method="POST">
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">
          Tên đăng nhập
        </label>
        <input
          type="text"
          id="username"
          name="username"
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
