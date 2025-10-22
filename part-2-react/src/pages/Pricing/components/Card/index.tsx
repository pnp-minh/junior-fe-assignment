import { plans } from "@/data";
import PlanHeader from "./components/Header";
import Price from "./components/Price";
import Feature from "./components/Feature";
import Enterprise from "./components/Enterprise";

function Card() {
  const regularPlans = plans.filter(plan => !plan.isEnterprise);
  const enterprisePlan = plans.find(plan => plan.isEnterprise);

  return (
    <div className="space-y-6">
      {/* Regular Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {regularPlans.map((plan) => {
          const isPopular = plan.isPopular;
          const baseClasses =
            "relative rounded-3xl transition-all duration-300 shadow-custom overflow-hidden";
          const bgClasses = isPopular
            ? "bg-light-blue"
            : "bg-white border border-neutral-300";

          return (
            <div key={plan.id} className={`${baseClasses} ${bgClasses}`}>
              <div className="p-6 flex flex-col gap-10">
                <PlanHeader plan={plan} />
                <Price plan={plan} />
                <Feature plan={plan} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Plan - Full Width */}
      {enterprisePlan && (
        <Enterprise key={enterprisePlan.id} plan={enterprisePlan} />
      )}
    </div>
  );
}

export default Card;