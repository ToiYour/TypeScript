import { Tabs } from "./Tabs";
import Search from "./Search";
import Feature from "./Feature";

const Banner = () => {
  return (
    <div className="banner">
      <div className="h-screen relative" style={{ maxHeight: "480px" }}>
        <img src="./img/banner.png" alt="" className="min-h-full" />
        <div className="body__banner absolute -translate-y-1/2 -translate-x-1/2 start-2/4 top-2/4">
          <h2 className="hidden sm:block text-[26px] text-white text-center mb-[22px]">
            <a href="">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</a>
          </h2>
          <div className="wrapper-search-banner bg-white rounded-lg">
            <Tabs />
            <Search />
          </div>
        </div>
        <Feature />
      </div>
    </div>
  );
};

export default Banner;
