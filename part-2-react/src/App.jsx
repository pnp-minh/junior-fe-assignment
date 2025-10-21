import PackageComponent from "./components/packageComponent";
import packageData from "./constants/dataPackage.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
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

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📋 Your Implementation Goes Here
          </h3>
          <p className="text-blue-700">
            Replace this section with your component implementation.
          </p>
        </div>
      </div>
      {/* code mới */}
      <div className="container mx-auto">
        <div className="mt-[50px]">
          <div>
            <div className="title">
              <p className="text-[#397AC4] uppercase font-medium text-center">Bảng giá</p>
              <h2 className="capitalize font-bold text-center text-2xl pt-[16px] pb-[28px]">Pricing & Plan</h2>
              <p className="text-center mb-[48px]">ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ đến tập đoàn lớn đang cần mở rộng quy trình tuyển dụng thông minh với AI</p>
            </div>
          </div>
          <div className="package-list grid lg:grid-cols-3 gap-[24px]">
            {
              packageData.filter((item) => !item.special).map((item, index) => {
                return <PackageComponent key={item.name} data={item} />;
              })
            }
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[27px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <div className="bg-[#F2F3F5] text-[#1F1F22] font-bold text-[24px] p-[24px] flex items-center rounded-3xl col-span-1"><p>Liên hệ để báo giá gói Enterprise</p></div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            {
              packageData.filter((item) => item.special).map((item, index) => {
                return <PackageComponent key={item.name} data={item} />;
              })
            }
          </div>
        </div>
      </div>
      {/* end code mới */}
    </div>
  );
}

export default App;
