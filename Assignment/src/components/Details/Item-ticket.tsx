import React from "react";
import Button from "../Headers/Button";

const ItemTicket = () => {
  return (
    <div className="item-ticket w-full flex justify-start items-center px-4 pt-14 pb-4 border-2  rounded-lg border-gray-200 bg-white">
      <div className="image__ticket relative	before:content-[''] before:absolute before:top-8 before:-left-2 before:w-2 before:h-3 before:bg-[#1D8046]">
        <img
          src="./img/sticket.png"
          alt=""
          className="object-cover max-w-[146px] max-h-[150px]"
        />
        <div className="confirm flex justify-center items-center bg-[#27AE60]  absolute -left-2 top-2">
          <div className="px-1">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.515 1.66667V3.88916C10.9042 3.88916 10.4042 4.38916 10.4042 5C10.4042 5.61166 10.9042 6.11166 11.515 6.11166V8.33333C11.515 8.945 11.015 9.445 10.4042 9.445H1.51501C0.904175 9.445 0.404175 8.945 0.404175 8.33333V6.11166C0.698897 6.11233 0.981811 5.99589 1.19068 5.78795C1.39955 5.58002 1.51726 5.29764 1.51792 5.00291C1.51859 4.70819 1.40215 4.42528 1.19421 4.21641C0.986284 4.00754 0.703897 3.88983 0.409175 3.88916V1.66667C0.410008 1.05 0.904175 0.555832 1.51501 0.555832H10.4042C11.015 0.555832 11.515 1.05 11.515 1.66667ZM5.45251 7.47083C5.43917 7.575 5.51084 7.66666 5.60417 7.66666C5.6322 7.66624 5.65954 7.65798 5.68311 7.64281C5.70668 7.62764 5.72552 7.60617 5.73751 7.58083L5.94084 7.185C6.19167 6.69666 6.63417 5.83583 7.27001 4.60333C7.32834 4.46417 7.27001 4.4075 7.16334 4.4075H6.22834L6.46751 2.52917C6.48084 2.425 6.40917 2.33333 6.31584 2.33333C6.28788 2.33404 6.26066 2.34242 6.23714 2.35756C6.21362 2.37269 6.19473 2.39401 6.18251 2.41917L5.37251 4.00167C5.09167 4.54917 4.85917 5.00166 4.67667 5.36166L4.67584 5.36333C4.66251 5.38416 4.53167 5.5925 4.75917 5.5925H5.69251L5.45251 7.47083Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-white text-[11px] pr-2 py-1">Xác nhận tức thì</p>
        </div>
      </div>
      <div className="info__ticket-container ml-4 w-full">
        <div className="">
          <div className="top-info flex justify-between items-start w-full">
            <h2>Hải Phòng Travel (Đất Cảng)</h2>
            <div className="flex flex-col">
              <p className="text-xl text-[#2474E5] font-semibold mb-2">
                Từ <span>230.000đ</span>
              </p>
              <span className="coupon text-xs text-center  py-1 border-2 border-[#27AE60] rounded-md  relative ">
                <span className="absolute rounded-e-lg  border-2 border-l-0 border-[#27AE60] -left-[1px] top-2 w-1 h-2 content-[''] bg-[#EEFBF4]  "></span>
                Giảm 10%
                <span className="absolute rounded-s-lg  border-2 border-r-0 border-[#27AE60] -right-[2px] top-2 w-1 h-2 content-[''] bg-[#EEFBF4]  "></span>
              </span>
            </div>
          </div>
          <div className="bottom-info flex justify-between items-center mt-4">
            <div className="relative pl-4">
              <div className="absolute left-0 top-[6px]">
                <svg
                  width={13}
                  height={74}
                  viewBox="0 0 13 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_711)">
                    <path
                      d="M6.55005 16.8571V56.2857"
                      stroke="#787878"
                      strokeWidth="1.71429"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5501 16C9.15373 16 11.2644 13.8893 11.2644 11.2857C11.2644 8.68207 9.15373 6.57141 6.5501 6.57141C3.94647 6.57141 1.83582 8.68207 1.83582 11.2857C1.83582 13.8893 3.94647 16 6.5501 16Z"
                      stroke="#484848"
                      strokeWidth="2.57143"
                    />
                    <path
                      d="M6.54999 55C5.1989 54.9893 3.89871 55.5148 2.93459 56.4614C1.97048 57.408 1.42116 58.6984 1.40713 60.0494C1.40463 60.7598 1.55825 61.4621 1.85713 62.1066C3.07316 64.4529 4.57674 66.6386 6.33313 68.6132C6.36032 68.6438 6.3937 68.6684 6.43109 68.6852C6.46847 68.7021 6.509 68.7107 6.54999 68.7107C6.59099 68.7107 6.63151 68.7021 6.6689 68.6852C6.70628 68.6684 6.73966 68.6438 6.76685 68.6132C8.52259 66.6409 10.0261 64.4578 11.2428 62.1143C11.5418 61.4698 11.6954 60.7676 11.6928 60.0572C11.6809 58.7047 11.1324 57.4124 10.1681 56.4642C9.20376 55.5159 7.90241 54.9893 6.54999 55ZM6.54999 62.6714C5.84812 62.6771 5.17264 62.4042 4.67176 61.9125C4.17088 61.4208 3.88552 60.7504 3.87828 60.0486C3.87828 59.34 4.15976 58.6604 4.6608 58.1594C5.16185 57.6583 5.84141 57.3769 6.54999 57.3769C7.25857 57.3769 7.93814 57.6583 8.43918 58.1594C8.94022 58.6604 9.22171 59.34 9.22171 60.0486C9.21446 60.7504 8.9291 61.4208 8.42822 61.9125C7.92735 62.4042 7.25187 62.6771 6.54999 62.6714Z"
                      fill="#787878"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_711">
                      <rect
                        width={12}
                        height={74}
                        fill="white"
                        transform="translate(0.550049)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="font-semibold text-xl">
                  19:00 • <span className="font-normal text-sm">Hà Nội</span>
                </p>
                <span className="text-sm text-[#707070]">1h30m</span>
                <p className="font-semibold text-xl text-[#707070]">
                  19:00 • <span className="font-normal text-sm">Hải Phòng</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#484848]">Còn 11 chỗ trống</p>
              <div className="my-2">
                <Button
                  title="Chọn chuyến"
                  bgColor="bg-[#FFC700]"
                  color="text-[#484848]"
                />
              </div>
              <h3 className="font-semibold text-black">
                Không cần thanh toán trước
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTicket;
