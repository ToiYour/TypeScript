import React from "react";
import ItemFilter from "./Item-Filter";

const Filter = () => {
  return (
    <div className="bg-white rounded-lg p-4 w-64 mr-5">
      <h2 className="font-semibold text-lg mb-4">Sắp xếp</h2>
      <ul className="space-y-1 ">
        <ItemFilter title="Mặc định" />
        <ItemFilter title="Giờ đi sớm nhất" />
        <ItemFilter title="Giờ đi muộn nhất" />
        <ItemFilter title="Đánh giá cao nhất" />
        <ItemFilter title="Giá tăng dần" />
        <ItemFilter title="Giá giảm dần" />
      </ul>
    </div>
  );
};

export default Filter;
