import { formatVND } from "../utils/utils";
import * as React from "react";
import checkedImg from "../assets/checked.svg";
import starterImage from "../assets/starter.svg";
import standardImage from "../assets/standard.svg";
import advancedImage from "../assets/advanced.svg";
import enterpriseImage from "../assets/enterprise.svg";

export interface IPackageComponentProps {
  data: {
    name: string;
    description: string;
    price: number;
    members: number;
    options: string[];
    special: boolean;
    recommend: boolean;
  };
}

export default function PackageComponent(props: IPackageComponentProps) {
  const { data } = props;
  return (
    <div
      className={`package-wrapper p-[24px] border-[1px] border-[#CFCFD3] rounded-3xl ${
        data.recommend || data.special ? "bg-[#EAF3FD]" : "bg-[#fff]"
      } ${data.special ? "flex flex-col lg:flex-row lg:justify-between" : ""}`}
    >
      <div className="title-package relative">
        <div className="flex items-center gap-[10px]">
          <div className={`${data.recommend ? "bg-[#fff]" : "bg-[#EAF3FD]"} p-[8px] rounded-lg`}>
            <img
              className="w-[32px] h-[32px]"
              src={
                data.name.toLocaleLowerCase() === "starter"
                  ? starterImage
                  : data.name.toLocaleLowerCase() === "standard"
                  ? standardImage
                  : data.name.toLocaleLowerCase() === "enterprise"
                  ? enterpriseImage
                  : advancedImage
              }
              alt={data.name}
            />
          </div>
          <div>
            <h4 className="font-bold text-[20px]">Gói {data.name}</h4>
            <p>{data.members < 30 ? `Bắt đầu với ${data.members} người dùng` : `Từ ${data.members} sử dụng`}</p>
          </div>
        </div>
        <div>
          <p className="pt-[16px] min-h-[70px]">{data.description}</p>
        </div>
        {data.recommend && (
          <span className=" bg-[#397AC4] text-[#fff] px-[6px] py-[2px] font-medium text-[14px] rounded-[8px] absolute top-0 right-0">
            Đề xuất
          </span>
        )}
      </div>
      {!data.special && (
        <>
          <div className="price-wrapper mt-[32px]">
            <div>
              <p className="text-[#7D7D85]">Chỉ từ</p>
              <div>
                <span className="text-[#1F1F22] font-bold text-[1.25rem]">{formatVND(data.price)} VND </span>
                <span className="text-[#7D7D85]">/tháng</span>
              </div>
            </div>
            <div>
              <button className="cursor-pointer bg-[#000] text-[#fff] font-bold w-full py-[12px] rounded-lg mb-[32px] mt-[40px]">
                Tư vấn dùng thử
              </button>
            </div>
          </div>
          <div className="options flex flex-col gap-[16px]">
            {data.options.map((option, index) => {
              return (
                <div key={option} className="flex items-center gap-[8px]">
                  <div>
                    <img src={checkedImg} alt="checked" />
                  </div>
                  <p>{option}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
      {data.special && (
        <div className="">
          <button className="cursor-pointer bg-[#fff] text-[#000] font-bold w-full py-[12px] rounded-lg mb-[32px] mt-[40px] px-[50px]">
            Liên hệ
          </button>
        </div>
      )}
    </div>
  );
}
