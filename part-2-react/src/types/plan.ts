export interface PricingFeature {
  id: string;
  text: string;
}

export interface Plan {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  price?: number;
  features: PricingFeature[];
  icon: string;
  isRecommended?: boolean;
}

export interface PricingData {
  plans: Plan[];
}

