import React from "react";
import StackStarterImage from "./assets/StackStarter.svg";
import StackStandardImage from "./assets/StackStandard.svg";
import StackAdvancedImage from "./assets/StackAdvanced.svg";
import StackEnterprise from "./assets/StackEnterprise.svg";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#397AC4] mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// Component for a single feature line item
const FeatureItem = ({ text }) => (
  <li className="flex items-start text-gray-700 mb-3">
    <CheckIcon />
    <span className="leading-tight">{text}</span>
  </li>
);

// Component for a single pricing card
const PricingCard = ({
  title,
  users,
  description,
  price,
  features,
  isRecommended = false,
  image,
}) => (
  <div
    className={`rounded-xl border border-gray-300 flex flex-col p-8 shadow-md transition-all duration-300 hover:shadow-xl relative ${
      isRecommended ? "bg-[#E6F0F8] border-[#397AC4] shadow-lg" : "bg-white"
    }`}
  >
    {isRecommended && (
      <div className="hidden sm:block absolute top-5 right-5 bg-[#397AC4] text-white text-sm py-1 px-4 rounded-xl ">
        Đề xuất
      </div>
    )}
    <div className="flex items-start mb-6">
      <div
        className={`w-12 h-12 mr-3 rounded-lg flex items-center justify-center ${
          isRecommended ? "bg-white" : "bg-gray-100"
        }`}
      >
        <img
          src={image}
          alt={`${title} Icon`}
          className={`w-6 h-6 ${
            isRecommended ? "text-[#397AC4]" : "text-gray-700"
          }`}
        />
      </div>
      <div>
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="text-gray-500">{users}</p>
      </div>
    </div>

    <p className="mb-6 text-gray-600 min-h-[48px]">{description}</p>

    <p className="text-gray-500">Chỉ từ</p>
    <p className="sm:text-3xl font-bold mb-8 text-2xl">
      {price}{" "}
      <span className="text-base font-normal text-gray-500">/tháng</span>
    </p>

    <button
      className={`py-3 px-6 rounded-lg w-full font-semibold bg-black text-white `}
    >
      Tư vấn dùng thử
    </button>

    <div className="mt-8">
      <ul>
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </ul>
    </div>
  </div>
);

function App() {
  // Data for the three pricing tiers
  const pricingPlans = [
    {
      title: "Gói Starter",
      users: "Bắt đầu với 03 người dùng",
      description: "Phù hợp với Startup, doanh nghiệp vừa và nhỏ",
      price: "150.000 VND",
      features: [
        "Tính năng cơ bản",
        "Quét dữ liệu thành công",
        "Xếp hạng ứng viên",
        "Lên lịch phỏng vấn tự động",
        "Giao diện tiếng việt - dễ dùng",
      ],
      isRecommended: false,
      image: StackStarterImage,
    },
    {
      title: "Gói Standard",
      users: "Bắt đầu với 10 người dùng",
      description:
        "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
      price: "2.000.000 VND",
      features: [
        "Tất cả tính năng Starter",
        "Đánh giá kĩ năng ứng viên",
        "Phân tích real-time",
        "Báo cáo funnel & tỷ lệ chuyển đổi tuyển",
        "SMS Notification",
      ],
      isRecommended: true,
      image: StackStandardImage,
    },
    {
      title: "Gói Advanced",
      users: "Từ 30 người sử dụng",
      description:
        "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
      price: "3.000.000 VND",
      features: [
        "Tất cả tính năng Pro",
        "Phân quyền người dùng theo chi nhánh",
        "Lộ trình đào tạo",
      ],
      isRecommended: false,
      image: StackAdvancedImage,
    },
  ];
  const pricingEnterprise = {
    title: "Gói Enterprise",
    users: "Từ 30 người sử dụng",
    description: "Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia",
    image: StackEnterprise,
  };

  return (
    <div className="px-5 md:px-20 py-16 font-sans">
      <div className="flex flex-col items-center gap-5 mb-12">
        <p className="text-[#397AC4] uppercase font-medium tracking-widest">
          Bảng giá
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Pricing & Plan</h2>
        <p className="max-w-xl text-center text-gray-600 mt-2">
          ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ đến
          tập đoàn lớn đang cần mở rộng quy trình tuyển dụng thông minh với AI.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            users={plan.users}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            isRecommended={plan.isRecommended}
            image={plan.image}
          />
        ))}
      </div>
      <div className="md:grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 rounded-xl shadow-sm flex items-center bg-[#F2F3F5] pl-6 pr-12 min-h-20 md:mb-0 mb-6">
          <h3 className="text-2xl font-bold leading-tight">
            Liên hệ để báo giá gói Enterprise
          </h3>
        </div>

        <div className="col-span-2 lg:flex justify-between items-center p-6 bg-[#E6F0F8] rounded-xl">
          <div className="">
            <div className="flex mb-6">
              <div className="w-12 h-12 mr-3 rounded-lg flex items-center justify-center bg-white">
                <img
                  src={pricingEnterprise.image}
                  alt={`${pricingEnterprise.title} Icon`}
                />
              </div>
              <div>
                <h5 className="text-xl font-bold">{pricingEnterprise.title}</h5>
                <p className="text-gray-500">{pricingEnterprise.users}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {pricingEnterprise.description}
            </p>
          </div>
          <button className="py-3 px-7 rounded-lg font-semibold bg-white text-black w-full lg:w-32 ">
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
