import { useEffect, useState } from "react";

type props = {
  title: string;
  titleOption: string;
  name: string;
};

const Select = (props: props) => {
  const [provinceCity, setProvinceCity] = useState([]);
  useEffect(() => {
    const getProvinceCity = async () => {
      const response = await (await fetch(`./tinh_tp.json`)).json();
      setProvinceCity(response.provinceCity);
    };
    getProvinceCity();
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
        id="HeadlineAct"
        className=" w-full font-medium min-w-[125px] outline-none"
      >
        <option value="" hidden>
          {props.titleOption}
        </option>
        {provinceCity.map((local) => (
          <option key={local.name} value={local?.name}>
            {local?.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
