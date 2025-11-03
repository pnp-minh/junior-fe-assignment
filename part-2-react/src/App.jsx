import Package from "./components/Package/Package";
import "./App.css";

function App() {
  const dataPackages = [
    {
      id: "starter",
      name: "Gói Starter",
      description: "Phù hợp với Startup, doanh nghiệp vừa và nhỏ",
      users: "Bắt đầu với 03 người dùng",
      price: 150000,
      currency: "VND",
      period: "tháng",
      features: [
        "Tính năng cơ bản",
        "Quét dữ liệu nhanh chóng",
        "Xếp hạng ứng viên",
        "Lên lịch phỏng vấn tự động",
        "Giao diện tiếng Việt - dễ dùng",
      ],
      recommended: false,
    },
    {
      id: "standard",
      name: "Gói Standard",
      description:
        "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
      users: "Bắt đầu với 10 người dùng",
      price: 2000000,
      currency: "VND",
      period: "tháng",
      features: [
        "Tất cả tính năng Starter",
        "Đánh giá kĩ năng ứng viên",
        "Phân tích real-time",
        "Báo cáo funnel & tỉ lệ chuyển đổi tuyển",
        "SMS Notification",
      ],
      recommended: true,
    },
    {
      id: "advanced",
      name: "Gói Advanced",
      description:
        "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
      users: "Từ 30 người sử dụng",
      price: 3000000,
      currency: "VND",
      period: "tháng",
      features: [
        "Tất cả tính năng Pro",
        "Phân quyền người dùng theo chi nhánh",
        "Lộ trình đào tạo",
      ],
      recommended: false,
    },
    {
      id: "enterprise",
      name: "Gói Enterprise",
      description: "Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia",
      users: "Từ 30 người sử dụng",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Part 2: Component Implementation
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Instructions
          </h2>
          <p className="text-gray-600 mb-4">
            Implement the component based on the provided Figma design below.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Match the design as closely as possible</li>
            <li>Use Tailwind CSS (preferred) or regular CSS</li>
            <li>Make it responsive (mobile & desktop)</li>
            <li>Write clean, reusable components</li>
          </ul>
        </div>
      </div>
      {/* TODO */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h4 className="text-base font-medium text-[#397AC4] uppercase tracking-wide">
            BẢNG GIÁ
          </h4>
          <h2 className="text-[40px] leading-[120%] font-bold text-neutral-900 mt-4">
            Pricing & Plan
          </h2>
          <p className="text-neutral-800 mt-7 text-base font-medium leading-relaxed leading-[150%]">
            ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ
            đến tập đoàn lớn đang cần mở rộng quy trình tuyển dụng thông minh
            với AI.
          </p>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-stretch lg:mx-20">
        {dataPackages.map((pkg) => {
          if (pkg.id === "enterprise") {
            return null;
          }
          return <Package key={pkg.id} pkg={pkg} />;
        })}
      </div>
      <div className="grid-custom">
        <div className="rounded-xl bg-neutral-100 px-6 py-10 font-bold text-2xl text-neutral-900 shadow-md">
          Liên hệ để báo giá gói Enterprise
        </div>
        <Package key={dataPackages[3].id} pkg={dataPackages[3]} />
      </div>
    </div>
  );
}

export default App;
