import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [seachParams, setSeachParams] = useSearchParams();
  const handleFilter = (colData: string, typeData: string) => {
    let newSearch = { col: colData, sort: typeData };
    for (const [key, val] of seachParams) {
      newSearch = { [key]: val, ...newSearch };
    }
    setSeachParams(newSearch);
  };
  return (
    <div className="grow md:grow-0 bg-white rounded-lg p-4 w-full md:w-64 mr-5 ">
      <h2 className="font-semibold text-lg mb-4">Sắp xếp</h2>
      <ul className="filter-wrapper space-y-1 ">
        <li>
          <label htmlFor={"default"} className="inline-flex items-center gap-2">
            <input
              onChange={() => handleFilter("name", "asc")}
              type="radio"
              id={"default"}
              name="filter"
              defaultChecked
              className="size-5 rounded  border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">Mặc định</span>
          </label>
        </li>
        <li>
          <label
            htmlFor={"startTime-asc"}
            className="inline-flex items-center gap-2"
          >
            <input
              onChange={() => handleFilter("startTime", "asc")}
              type="radio"
              data-filter={"startTime-asc"}
              id={"startTime-asc"}
              name="filter"
              className="size-5 rounded  border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              Giờ đi sớm nhất
            </span>
          </label>
        </li>
        <li>
          <label
            htmlFor={"startTime-desc"}
            className="inline-flex items-center gap-2"
          >
            <input
              onChange={() => handleFilter("startTime", "desc")}
              data-filter={"startTime-desc"}
              type="radio"
              id={"startTime-desc"}
              name="filter"
              className="size-5 rounded  border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              Giờ đi muộn nhất
            </span>
          </label>
        </li>
        <li>
          <label
            htmlFor={"price-asc"}
            className="inline-flex items-center gap-2"
          >
            <input
              onChange={() => handleFilter("price", "asc")}
              data-filter={"price-asc"}
              type="radio"
              id={"price-asc"}
              name="filter"
              className="size-5 rounded  border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              Giá tăng dần
            </span>
          </label>
        </li>
        <li>
          <label
            htmlFor={"price-desc"}
            className="inline-flex items-center gap-2"
          >
            <input
              onChange={() => handleFilter("price", "desc")}
              type="radio"
              data-filter={"price-desc"}
              id={"price-desc"}
              name="filter"
              className="size-5 rounded  border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              Giá giảm dần
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
