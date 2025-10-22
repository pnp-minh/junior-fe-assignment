import { IPlan } from "@/types";

interface PlanHeaderProps {
  plan: IPlan;
}

function PlanHeader({ plan }: PlanHeaderProps) {
  const { isEnterprise, icon, name, description, subDescription, isSuggested } =
    plan;

  const iconBgClass = isEnterprise ? "bg-white" : "bg-light-blue";

  return (
    <div className="grid gap-4">
      <div className="flex justify-between">
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <img
              src={icon}
              alt={name}
              className={`w-12 h-12 ${iconBgClass} p-2 rounded-lg`}
            />
            <div className="text-left">
              <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
              <p className="text-neutral-700 font-medium">{description}</p>
            </div>
          </div>
          {subDescription && (
            <div className="h-12">
              <p className="text-neutral-800 font-medium">{subDescription}</p>
            </div>
          )}
        </div>

        {isSuggested && (
          <div className="hidden md:block bg-dark-blue text-white px-1 py-1 rounded-lg text-sm font-semibold h-fit w-fit whitespace-nowrap">
            Đề xuất
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanHeader;
