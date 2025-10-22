import { formatPrice } from "@/constants/priceFormatter";
import { IPlan } from "@/types";

interface PriceProps {
  plan: IPlan;
}

function Price({ plan }: PriceProps) {
  const { price, period } = plan;

  if (!price) return null;

  return (
    <div className="grid gap-1 font-medium">
      <p className="text-neutral-900">Chỉ từ</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-neutral-900">
          {formatPrice(price)} VND
        </span>
        {period && <span className="text-sm text-neutral-600">{period}</span>}
      </div>
    </div>
  );
}

export default Price;
