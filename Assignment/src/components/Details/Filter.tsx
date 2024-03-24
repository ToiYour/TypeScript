import React from "react";
import ItemFilter from "./Item-Filter";

const Filter = () => {
  return (
    <div className="grow md:grow-0 bg-white rounded-lg p-4 w-full md:w-64 mr-5 ">
      <h2 className="font-semibold text-lg mb-4">Sắp xếp</h2>
      <ul className="space-y-1 ">
        <ItemFilter title="Mặc định" isChecked={true} />
        <ItemFilter title="Giờ đi sớm nhất" isChecked={false} />
        <ItemFilter title="Giờ đi muộn nhất" isChecked={false} />
        <ItemFilter title="Đánh giá cao nhất" isChecked={false} />
        <ItemFilter title="Giá tăng dần" isChecked={false} />
        <ItemFilter title="Giá giảm dần" isChecked={false} />
      </ul>
    </div>
  );
};

export default Filter;
