import { Iinput } from "../../../interfaces";
const Input = (props: { style: Iinput; register: object }) => {
  return (
    <input
      {...props.register}
      min={props.style.min}
      defaultValue={props.style.default}
      className="mt-1.5 py-4 px-3 w-full rounded-lg border-2 border-gray-300 text-gray-700 sm:text-sm"
      type={props.style.type}
      id={props.style.name}
      name={props.style.name}
    />
  );
};

export default Input;
