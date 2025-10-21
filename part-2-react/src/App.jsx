import PricingCard from "./components/PricingCard";
import { pricingPlans, pricingEnterprise } from "./data/pricingData";

function App() {
  return (
    <div className="px-5 md:px-20 py-16 font-sans">
      {/* Header Section */}
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

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

      {/* Enterprise Section */}
      <div className="md:grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Contact Title Area */}
        <div className="col-span-1 rounded-xl shadow-sm flex items-center bg-[#F2F3F5] pl-6 pr-12 min-h-20 md:mb-0 mb-6">
          <h3 className="text-2xl font-bold leading-tight">
            Liên hệ để báo giá gói Enterprise
          </h3>
        </div>

        {/* Enterprise Card Area */}
        <div className="col-span-2 lg:flex justify-between items-center p-6 bg-[#E6F0F8] rounded-xl">
          <div className="flex flex-col">
            <div className="flex mb-4">
              <div className="w-12 h-12 mr-3 rounded-lg flex items-center justify-center bg-white flex-shrink-0">
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
            <p className="text-gray-700 mb-6 lg:mb-0">
              {pricingEnterprise.description}
            </p>
          </div>
          <button className="py-3 px-7 rounded-lg font-semibold bg-white text-black w-full lg:w-32 hover:bg-gray-100 transition flex-shrink-0">
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
