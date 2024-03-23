import React from "react";
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
type propsType = {
  title: string;
  image: string;
  old_price: number;
  new_price: number;
};
const Card = (props: propsType) => {
  return (
    <a href="#" className="item-carousel block rounded-lg">
      <img
        alt=""
        src={props.image}
        className="h-56 w-full rounded-t-lg  object-cover max-h-[116px]"
      />
      <div className="bg-[#9E947C] p-3 text-white rounded-b-lg">
        <dl>
          <div>
            <dt className="sr-only">Address</dt>
            <dd className="font-semibold">{props.title}</dd>
          </div>
          <div className="pb-6">
            <dt className="sr-only">Price</dt>
            <dd className="text-sm">
              Từ <span>{VND.format(props.new_price)}</span>
              <span className="text-gray-300 ml-2 line-through">
                {props.old_price ? VND.format(props.old_price) : ""}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </a>
  );
};

export default Card;
