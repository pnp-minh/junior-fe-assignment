import { IPlan } from "@/types";

interface FeatureProps {
  plan: IPlan;
}

function Feature({ plan }: FeatureProps) {
  const isEnterprise = plan.isEnterprise;

  const buttonClasses = isEnterprise
    ? "h-12 w-full bg-white text-black rounded-lg font-bold lg:w-31"
    : "h-12 w-full bg-black text-white rounded-lg font-bold";

  return (
    <div className={`grid ${isEnterprise ? "gap-2" : "gap-8"}`}>
      <button className={buttonClasses}>{plan.cta}</button>

      {!isEnterprise && (
        <div className="grid gap-4">
          {plan?.features?.map((feature) => (
            <div key={feature.id} className="flex items-start gap-2">
              <img src={feature.icon} alt={feature.name} />
              <span className="text-sm leading-relaxed text-neutral-800 font-medium">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feature;
