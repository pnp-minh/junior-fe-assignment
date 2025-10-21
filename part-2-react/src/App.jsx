import StartPlan from './assets/start-plan.svg?react';
import StandardPlan from './assets/standard-plan.svg?react';
import AdvancedPlan from './assets/advanced-plan.svg?react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const plans = [
  {
    name: 'Gói Starter',
    users: 'Bắt đầu với 03 người dùng',
    description: 'Phù hợp với Startup, doanh nghiệp vừa và nhỏ',
    price: '150.000',
    icon: StartPlan,
    features: [
      'Tính năng cơ bản',
      'Quét dữ liệu nhanh chóng',
      'Xếp hạng ứng viên',
      'Lên lịch phỏng vấn tự động',
      'Giao diện tiếng Việt - dễ dùng',
    ],
  },
  {
    name: 'Gói Standard',
    users: 'Bắt đầu với 10 người dùng',
    description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
    price: '2.000.000',
    icon: StandardPlan,
    features: [
      'Tất cả tính năng Starter',
      'Đánh giá kĩ năng ứng viên',
      'Phân tích real-time',
      'Báo cáo funnel & tỷ lệ chuyển đổi tuyển',
      'SMS Notification',
    ],
    recommended: true,
  },
  {
    name: 'Gói Advanced',
    users: 'Từ 30 người sử dụng',
    description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
    price: '3.000.000',
    icon: AdvancedPlan,
    features: ['Tất cả tính năng Pro', 'Phân quyền người dùng theo chi nhánh', 'Lộ trình đào tạo'],
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[326px] md:max-w-[640px] lg:max-w-[800px] mx-auto mb-12">
          <p className="text-base font-medium text-[#397AC4] uppercase">Bảng giá</p>
          <h1 className="mt-4 text-[32px] md:text-[40px] md:leading-[1.2] font-extrabold text-[#1F1F22]">
            Pricing & Plan
          </h1>
          <p className="mt-7 text-base font-medium text-[#3F3F45]">
            ABC Company cung cấp nhiều lựa chọn linh hoạt, từ startup nhỏ đến tập đoàn lớn đang cần mở rộng quy trình
            tuyển dụng thông minh với AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.recommended && 'bg-[#EAF3FD]'} flex-1 flex flex-col p-6 rounded-2xl border border-neutral-300 backdrop-blurblur shadow-lg shadow-neutral-50`}
            >
              {plan.recommended && (
                <div className="hidden md:block absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Đề xuất
                </div>
              )}

              <div className="flex items-center justify-between lg:min-h-18 gap-3.5">
                <div
                  className={`size-12 flex items-center justify-center ${plan.recommended ? 'bg-white' : 'bg-[#EAF3FD]'} rounded-xl`}
                >
                  <plan.icon />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1F1F22]">{plan.name}</h3>
                  <p className="text-base font-medium text-[#5F5F67]">{plan.users}</p>
                </div>
              </div>

              <p className="mt-4 text-base min-h-12 font-medium text-[#3F3F45]">{plan.description}</p>

              <div className="mt-10">
                <p className="text-base font-medium text-[#7D7D85]">Chỉ từ</p>
                <p>
                  <span className="text-2xl md:text-3xl leading-[1.2] font-extrabold text-[#1F1F22]">
                    {plan.price} VND
                  </span>{' '}
                  <span className="text-base font-medium text-[#7D7D85]">/tháng</span>
                </p>
              </div>

              <a
                href="#"
                className="mt-10 block w-full bg-black text-white text-center py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition"
              >
                Tư vấn dùng thử
              </a>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon />
                    <p className="text-sm leading-normal flex-1 text-[#3F3F45]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-6">
          <div className="lg:col-span-1 h-full md:flex md:justify-center md:items-center bg-[#F2F3F5] p-6 rounded-3xl backdrop-blur shadow shadow-[#FAFAFB]">
            <h2 className="text-2xl font-bold text-[#1F1F22]">Liên hệ để báo giá gói Enterprise</h2>
          </div>

          <div className="lg:col-span-2 flex flex-col lg:flex-row items-center justify-center gap-8 md:my-4 lg:my-0 bg-blue-50 rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col flex-1 w-full">
              <div className="flex items-center gap-3.5">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1F1F22]">Gói Enterprise</h3>
                  <p className="text-base text-[#5F5F67]">Từ 30 người sử dụng</p>
                </div>
              </div>

              <p className="mt-4 text-base font-medium text-[#3F3F45]">
                Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia
              </p>
            </div>

            <button className="w-full lg:w-auto">
              <a
                href="#"
                className="block w-full bg-white text-base text-[#1F1F22] text-center font-bold border-none py-3 px-6 rounded-lg transition"
              >
                Liên hệ
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
