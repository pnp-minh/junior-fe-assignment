import { pricingData } from '../data/pricingData';
import EnterprisePlanCard from './EnterprisePlanCard';
import RegularPlanCard from './RegularPlanCard';

const PricingPlan = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-primary-blue text-base font-medium uppercase tracking-wider">
          BẢNG GIÁ
        </p>
        <h1 className="text-[40px] font-bold text-neutral-900 mb-4">
          Pricing & Plan
        </h1>
        <p className="text-neutral-800 max-w-3xl mx-auto">
          ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ đến tập đoàn lớn đang cần mở rộng quy trình tuyển dụng thông minh với AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {pricingData.plans.map((plan) => (
          <RegularPlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <EnterprisePlanCard />
    </div>
  );
};

export default PricingPlan;

