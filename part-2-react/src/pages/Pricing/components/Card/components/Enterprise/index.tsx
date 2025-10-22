import { IPlan } from "@/types";
import Feature from "../Feature";
import PlanHeader from "../Header";
import Price from "../Price";

interface EnterpriseCardProps {
  plan: IPlan;
}

function Enterprise({ plan }: EnterpriseCardProps) {
  const isPopular = plan.isPopular;
  const baseClasses =
    "relative rounded-3xl transition-all duration-300 shadow-custom overflow-hidden";
  const bgClasses = isPopular
    ? "bg-light-blue"
    : "bg-white border border-neutral-300";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-4">
      <div
        className={`text-2xl text-neutral-900 font-bold ${baseClasses} p-6 bg-neutral-100`}
      >
        <p>Liên hệ để báo giá gói Enterprise</p>
      </div>
      <div key={plan.id} className={`${baseClasses} ${bgClasses}`}>
        <div className="p-6 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 lg:items-center">
          <PlanHeader plan={plan} />
          <Price plan={plan} />
          <Feature plan={plan} />
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
