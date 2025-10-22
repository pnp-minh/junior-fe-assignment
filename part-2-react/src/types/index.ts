interface IFeatureList {
  id: number;
  name: string;
  icon?: string;
}

export interface IPlan {
  id: number;
  name: string;
  icon?: string;
  price?: number;
  period?: string;
  isSuggested?: boolean;
  description?: string;
  subDescription?: string;
  features?: IFeatureList[];
  cta?: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}
