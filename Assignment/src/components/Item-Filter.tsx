import React from "react";
type ItemFilter = {
  title: string;
};
const ItemFilter = ({ title }: ItemFilter) => {
  return (
    <li>
      <label htmlFor={title} className="inline-flex items-center gap-2">
        <input
          type="radio"
          id={title}
          className="size-5 rounded  border-gray-300"
          name="filter"
        />
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </label>
    </li>
  );
};

export default ItemFilter;
