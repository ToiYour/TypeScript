import { Iselect } from "../../../interfaces";
const Select = (props: Iselect) => {
  return (
    <select
      name={props.name}
      id={props.name}
      {...props.register}
      className="mt-1.5 py-4 px-3 w-full rounded-lg border-2 border-gray-300 text-gray-700 sm:text-sm"
    >
      <option value="" hidden>
        {props.optionTitle}
      </option>
      {props.data.map((opt) => (
        <option value={opt._id} key={opt._id}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
