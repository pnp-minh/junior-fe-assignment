const EnterprisePlanCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-2xl bg-gray-100 p-8 flex flex-col justify-center col-span-1">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Liên hệ để báo giá gói Enterprise
        </h2>
      </div>

      <div className="rounded-2xl bg-primary-blue-light border-none p-6 flex flex-col col-span-1 lg:col-span-2">
        <div>
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <img
                src='/StackPlus.svg'
                alt='Gói Enterprise'
                className="w-8 h-8"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-neutral-900">
                Gói Enterprise
              </h3>
              <p className="text-sm text-neutral-700 mt-1">
                Từ 30 người sử dụng
              </p>
            </div>
          </div>

          <p className="text-sm text-neutral-700 mb-6">
            Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia
          </p>
        </div>

        <button className="w-full bg-white text-neutral-900 font-bold py-3 px-8 rounded-lg hover:bg-neutral-300 cursor-pointer">
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default EnterprisePlanCard;

