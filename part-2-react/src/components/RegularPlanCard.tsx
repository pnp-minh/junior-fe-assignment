import { Plan } from '../types/plan';

interface PricingCardProps {
  plan: Plan;
}

const RegularPlanCard = ({ plan }: PricingCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN');
  };

  return (
    <div
      className={`rounded-2xl border ${
        plan.isRecommended
          ? 'bg-primary-blue-light border-none'
          : 'bg-white border-neutral-300'
      } p-6 flex flex-col h-full`}
    >
      <div className="flex items-start gap-3 mb-4 min-h-[60px]">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
          <img src={plan.icon} alt={plan.name} className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <h3 className="text-lg font-semibold text-neutral-900">
              {plan.title}
            </h3>
            {plan.isRecommended && (
              <span className="px-2 bg-primary-blue text-white text-sm font-medium rounded-lg">
                Đề xuất
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-700 mt-1">{plan.subtitle}</p>
        </div>
      </div>

      <p className="text-sm text-neutral-700 mb-6 min-h-[40px]">{plan.description}</p>

      <div className="mb-6 min-h-[72px]">
        {plan.price && (
          <>
            <p className="text-sm text-neutral-600 mb-1">Chỉ từ</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-neutral-900">
                {formatPrice(plan.price)} VND
              </span>
              <span className="text-sm text-neutral-600">/tháng</span>
            </div>
          </>
        )}
      </div>

      <button className="w-full bg-black text-white font-medium py-3 px-8 rounded-lg hover:bg-neutral-800 cursor-pointer mb-6">
        Tư vấn dùng thử
      </button>

      {plan.features.length > 0 && (
        <ul className="space-y-3 flex-1">
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-start gap-2">
              <img src="/CheckCircle.svg" alt="check" className="w-4 h-4" />
              <span className="text-sm text-neutral-700">{feature.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegularPlanCard;

