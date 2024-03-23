type ButtonType = {
  title: string;
  bgColor: string;
  color: string;
  px?: string;
  py?: string;
};
const Button = ({
  title,
  bgColor,
  color,
  px = "px-7",
  py = "py-2",
}: ButtonType) => {
  return (
    <button
      className={`inline-block rounded ${px} ${py}  border border-slate-300 text-sm  ${bgColor} font-medium ${color} hover:bg-[#366D91] hover:text-white focus:outline-none focus:ring active:bg-indigo-500`}
    >
      {title}
    </button>
  );
};

export default Button;
