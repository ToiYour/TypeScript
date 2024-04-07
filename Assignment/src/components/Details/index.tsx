import { useEffect, useState } from "react";
import { getSearchTrips } from "../../api/trips";
import { ITripItem } from "../../interfaces";
import ItemTab from "../Banners/Item-tab";
import Search from "../Banners/Search";
import { SVGTabs } from "../Banners/Tabs";
import Filter from "./Filter";
import ItemTicket from "./Item-ticket";
import { Link, useSearchParams } from "react-router-dom";

const DetailPage = () => {
  const [seachParams] = useSearchParams();
  const [trips, setTrips] = useState<ITripItem[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getSearchTrips(location.search);
      setTrips(data);
    })();
  }, [seachParams]);
  return (
    <>
      <main className="bg-[#F2F2F2] pb-4">
        <div className="container max-w-screen-lg mx-auto ">
          <div className="search py-5">
            <div className="wrapper-search-banner bg-white rounded-lg">
              <div className="tabs-nav border-b-2 border-gray-200">
                <ul className="flex justify-center items-center">
                  <ItemTab
                    hiddenItem={false}
                    active
                    title="80K"
                    svg={SVGTabs.bus}
                    badge=""
                  />
                  <ItemTab
                    hiddenItem={false}
                    active={false}
                    title="Máy bay"
                    svg={SVGTabs.plane}
                    badge="-20K"
                  />
                  <ItemTab
                    hiddenItem={false}
                    active={false}
                    title="93K"
                    svg={SVGTabs.train}
                    badge="Mới"
                  />
                </ul>
                <span className="line-tabs"></span>
              </div>
              <Search />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-start">
            <Filter />
            <div className="grow grid mx-auto md:mx-0  gap-y-4 ">
              {trips.length <= 0 ? (
                <div className="flex flex-col justify-center items-center gap-y-5">
                  <div>
                    <img
                      className="mx-auto"
                      src="./img/notrips.png"
                      alt=""
                      width={450}
                    />
                    <h2 className="text-center font-bold text-xl">
                      Không tìm thấy xe buýt
                    </h2>
                    <p className="text-center text-sm">
                      Rất tiếc, chúng tôi không tìm được những gì bạn đang tìm
                      kiếm, nhưng nhiều tuyến xe khác sẽ sớm có sẵn cho bạn. Vui
                      lòng kiểm tra lại sau.
                    </p>
                  </div>
                  <Link
                    to={"/"}
                    className="text-center text-white font-semibold rounded-md bg-blue-500 py-2 px-20"
                  >
                    Xem địa điểm tuyến khác
                  </Link>
                </div>
              ) : (
                trips.map((trip) => <ItemTicket key={trip._id} {...trip} />)
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
