import React from "react";
type props = {
  title: string;
  titleOption: string;
};

const Select = (props: props) => {
  return (
    <>
      <label
        htmlFor="HeadlineAct"
        className="text-xs text-gray-400 block sm:inline-block"
      >
        {props.title}
      </label>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className=" w-full font-medium min-w-[125px]:"
      >
        <option value="" hidden>
          {props.titleOption}
        </option>
        <option value="JM">John Mayer</option>
        <option value="SRV">Stevie Ray Vaughn</option>
        <option value="JH">Jimi Hendrix</option>
        <option value="BBK">B.B King</option>
        <option value="AK">Albert King</option>
        <option value="BG">Buddy Guy</option>
        <option value="EC">Eric Clapton</option>
      </select>
    </>
  );
};

export default Select;
