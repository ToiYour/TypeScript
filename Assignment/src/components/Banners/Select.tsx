import { useEffect, useState } from "react";
import { getAllStation } from "../../api/station";
import { IStation } from "../../interfaces";

type props = {
  title: string;
  titleOption: string;
  name: string;
  register: object;
  // data: IStation[];
};

const Select = (props: props) => {
  const [stations, setStations] = useState<IStation[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllStation();
      setStations(data);
    })();
  }, []);
  return (
    <>
      <label
        htmlFor="HeadlineAct"
        className="text-xs text-gray-400 block sm:inline-block"
      >
        {props.title}
      </label>
      <select
        name={props.name}
        {...props.register}
        className=" w-full font-medium min-w-[125px] outline-none"
      >
        <option value="" hidden>
          {props.titleOption}
        </option>
        {stations.map((station) => (
          <option value={station._id} key={station._id}>
            {station?.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
