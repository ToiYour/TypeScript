import Information from "./Information";
const Footer = () => {
  const vehicleRoute = [
    "Xe đi Buôn Mê Thuột từ Sài Gòn",
    "Xe đi Vũng Tàu từ Sài Gòn",
    "Xe đi Nha Trang từ Sài Gòn",
    "Xe đi Đà Lạt từ Sài Gòn",
    "Xe đi Sapa từ Hà Nội",
    " Xe đi Hải Phòng từ Hà Nội",
    "Xe đi Vinh từ Hà Nội",
  ];
  const limousine = [
    "Xe Limousine đi Đà Lạt từ Sài Gòn",
    "Xe Limousine đi Vũng Tàu từ Sài Gòn",
    "Xe Limousine đi Nha Trang từ Sài Gòn",
    "Xe Limousine đi Hải Phòng từ Hà Nội",
    "Xe Limousine đi Hạ Long từ Hà Nội",
    "Xe Limousine đi Sapa Từ Hà Nội",
    "Xe Limousine đi Quảng Ninh từ Hà Nội",
  ];
  const news = [
    "Xe giường nằm Limousine – đỉnh cao mới của",
    "Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe",
    "Review xe limousine đi Đà Lạt: những câu hỏi",
    "Xe limousine đi Sapa: Tổng hợp top các hãng xe",
  ];
  const busStation = [
    "Bến xe Miền Đông",
    "Bến xe Trung tâm Đà Nẵng",
    "Bến xe Gia Lâm",
    "Bến xe Trung tâm Đà Nẵng",
    "Bến xe Miền Đông",
  ];
  const garage1 = [
    "Xe Liên Hưng",
    "Xe Long Vân Limousine",
    "Xe Vie Limousine",
    "Xe Cúc Tùng",
    "Xe An Phú Buslines",
    "Xe Bằng Phấn",
    "Xe Hà Lan",
    "Xe 36 Limousine",
  ];
  const garage2 = [
    "Xe Thuận Tiến",
    "Xe Khanh Phong",
    "Xe Tiến Oanh",
    "Xe Hạnh Cafe",
    "Xe Tân Kim Chi",
    "Xe Quang Nghị",
    "Xe Nam Cường Limousine",
    "Xe Phúc Xuyên",
  ];
  const garage3 = [
    "Xe Điền Linh",
    "Xe Tuấn Hưng",
    "Xe Phong Phú",
    "Xe Trà Lan Viên",
    "Xe Nam Quỳnh Anh",
    "Xe G8 Open Tour",
    "Xe Hải Âu",
    "Xe Tràng An Limousine",
  ];
  const garage4 = [
    " Xe Đồng Phước",
    "Xe Hảo",
    "Xe Hoa Mai",
    "Xe Minh Quốc",
    "Xe An Phú Quý",
    "Xe Xuân Tráng Limousine",
    "Xe Sao Việt",
    "Xe Sao Nghệ Limousine",
  ];
  const supports = [
    "Hướng dẫn thanh toán",
    "Quy chế Vexere.com",
    "Chính sách bảo mật thông tin",
    "Chính sách bảo mật thanh toán",
    "Chính sách và quy trình giải",
    "Câu hỏi thường gặp",
    "Tra cứu đơn hàng",
  ];
  const abouts = [
    "Phần mềm đại lý",
    "Giới Thiệu Vexere.com",
    "Tuyển dụng",
    "Tin tức",
    "Liên hệ",
  ];
  return (
    <footer>
      <div className="py-12 bg-[#F2F2F2]">
        <div className="container max-w-screen-lg mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row ml-10 sm:ml-0  items-start justify-start">
            <div className="routes mr-[95px]">
              <h2 className="font-semibold text-[22px] mb-[21px]">
                Tuyến đường
              </h2>
              <ul className="underline font-semibold text-[10px] space-y-5">
                <Information titles={vehicleRoute} lastChildBold />
              </ul>
            </div>

            <div className="limousine mr-[106px]">
              <h2 className="font-semibold text-[22px] mb-[21px]">
                Xe Limousine
              </h2>
              <ul className="underline font-semibold text-[10px] space-y-5">
                <Information titles={limousine} lastChildBold />
              </ul>
            </div>

            <div className="news">
              <h2 className="font-semibold text-[22px] mb-[21px]">Tin tức</h2>
              <ul className="underline font-semibold text-[10px] space-y-5">
                {" "}
                <Information titles={news} lastChildBold />
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row ml-10 sm:ml-0 items-start justify-start">
            <div className="bus-station mr-28">
              <h2 className="font-semibold text-[22px] mb-[21px]">Bến xe</h2>
              <ul className="underline font-semibold text-[10px] space-y-5">
                <Information titles={busStation} lastChildBold />
              </ul>
            </div>
            <div className="garage">
              <h2 className="font-semibold text-[22px] mb-[21px]">Nhà xe</h2>
              <div className="garage-container flex flex-col sm:flex-row ml-10 sm:ml-0 items-center">
                <ul className="underline font-semibold text-[10px] space-y-5 mr-6">
                  <Information titles={garage1} lastChildBold={false} />
                </ul>

                <ul className="underline font-semibold text-[10px] space-y-5 mr-2">
                  <Information titles={garage2} lastChildBold={false} />
                </ul>

                <ul className="underline font-semibold text-[10px] space-y-5 mr-[25px]">
                  <Information titles={garage3} lastChildBold={false} />
                </ul>

                <ul className="underline font-semibold text-[10px] space-y-5">
                  <Information titles={garage4} lastChildBold={false} />
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row ml-10 sm:ml-0 items-start justify-start">
            <div className="supports mr-[34px]">
              <h2 className="font-semibold text-[22px] mb-[21px]">Hỗ trợ</h2>
              <ul className="underline font-semibold text-[14px] space-y-5">
                <Information titles={supports} lastChildBold={false} />
              </ul>
            </div>
            <div className="abouts mr-[93px]">
              <h2 className="font-semibold text-[22px] mb-[21px]">
                Về chúng tôi
              </h2>
              <ul className="underline font-semibold text-[14px] space-y-5">
                <Information titles={abouts} lastChildBold={false} />
              </ul>
              <h2 className="font-semibold text-[22px] mt-[52px]">
                Chứng nhận
              </h2>
            </div>
            <div className="payments mr-[43px]">
              <h2 className="font-semibold text-[22px] mb-[21px]">
                Đối tác thanh toán
              </h2>
            </div>
            <div className="dow-app">
              <h2 className="font-semibold text-[22px] mb-[18px]">
                Tải ứng dụng Vexere
              </h2>
              <img
                src="./img/download_app_qr.png.png"
                alt=""
                className="size-[164px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="company py-6 text-center">
        <h2 className="text-lg font-semibold">
          Công ty TNHH Thương Mại Dịch Vụ Vexere
        </h2>
        <p className="text-[7px] text-[#767676] font-regular my-3">
          Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình,
          Thành Phố Hồ Chí Minh, Việt Nam
        </p>
        <ul className="text-[#767676] text-[13px] mx-auto text-center">
          <li>
            <span>
              Địa chỉ:Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường
              6, Quận 4, Tp. Hồ Chí Minh, Việt Nam
            </span>
          </li>
          <li>
            <span>
              Tầng 3, toà nhà 101 Láng Hạ, Đường 101 Láng Hạ, Phường Láng Hạ,
              Quận Đống Đa, Hà Nội, Việt Nam
            </span>
          </li>
          <li>
            <span>
              Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh
              cấp lần đầu ngày 27/6/2018
            </span>
          </li>
          <li>
            <span>Bản quyền © 2020 thuộc về Vexere.Com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
