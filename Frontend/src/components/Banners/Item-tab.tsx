type typeItemTab = {
  hiddenItem: boolean;
  active: boolean;
  title: string;
  badge: string;
  svg: string;
};
const ItemTab = (props: typeItemTab) => {
  return (
    <>
      <li
        className={`pt-5 pb-3.5 px-6 ml-2 mt-2 ${
          props.active ? "tabs-active" : ""
        } ${props.hiddenItem ? "hidden" : ""} relative`}
      >
        <a href="" className="flex items-center text-base">
          <div dangerouslySetInnerHTML={{ __html: props.svg }}></div>
          <span className="hidden sm:inline-block text-base font-semibold pl-2 ">
            {props.title}
          </span>
          <span
            className={`${
              !props.badge ? "hidden" : ""
            } whitespace-nowrap absolute top-0 end-0 translate-x-1/4 rounded-full bg-[#EB5757] py-0.5 px-1.5 text-sm font-semibold text-white`}
          >
            {props.badge}
          </span>
        </a>
      </li>
    </>
  );
};

export default ItemTab;
