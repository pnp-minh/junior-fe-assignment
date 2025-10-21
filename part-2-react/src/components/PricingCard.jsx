import FeatureItem from "./FeatureItem";

const PricingCard = ({
  title,
  users,
  description,
  price,
  features,
  isRecommended = false,
  image,
}) => {
  const cardClasses = `rounded-xl border flex flex-col p-8 shadow-md transition-all duration-300 hover:shadow-xl relative ${
    isRecommended
      ? "bg-[#E6F0F8] border-[#397AC4] shadow-lg"
      : "bg-white border-gray-300"
  }`;

  const imageBgClass = isRecommended ? "bg-white" : "bg-gray-100";

  return (
    <div className={cardClasses}>
      {isRecommended && (
        <div className="hidden sm:block absolute top-5 right-5 bg-[#397AC4] text-white text-sm py-1 px-4 rounded-xl ">
          Đề xuất
        </div>
      )}
      <div className="flex items-start mb-6">
        <div
          className={`w-12 h-12 mr-3 rounded-lg flex items-center justify-center ${imageBgClass}`}
        >
          <img src={image} alt={`${title} Icon`} className="w-6 h-6" />
        </div>
        <div>
          <h5 className="text-xl font-bold">{title}</h5>
          <p className="text-gray-500">{users}</p>
        </div>
      </div>

      <p className="mb-6 text-gray-600 min-h-[48px]">{description}</p>

      {/* Pricing Information */}
      <p className="text-gray-500">Chỉ từ</p>
      <p className="sm:text-3xl font-bold mb-8 text-2xl">
        {price}{" "}
        <span className="text-base font-normal text-gray-500">/tháng</span>
      </p>

      <button className="py-3 px-6 rounded-lg w-full font-semibold bg-black text-white hover:bg-gray-800 transition">
        Tư vấn dùng thử
      </button>

      {/* Features List */}
      <div className="mt-8">
        <ul>
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
