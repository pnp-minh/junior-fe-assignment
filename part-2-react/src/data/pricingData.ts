import StackStarterImage from "../assets/StackStarter.svg";
import StackStandardImage from "../assets/StackStandard.svg";
import StackAdvancedImage from "../assets/StackAdvanced.svg";
import StackEnterpriseImage from "../assets/StackEnterprise.svg";

export interface IPricingPlan {
  title: string;
  users: string;
  description: string;
  price?: string;
  features?: string[];
  isRecommended?: boolean;
  image: string;
}

export const pricingPlans: IPricingPlan[] = [
  {
    title: "Gói Starter",
    users: "Bắt đầu với 03 người dùng",
    description: "Phù hợp với Startup, doanh nghiệp vừa và nhỏ",
    price: "150.000 VND",
    features: [
      "Tính năng cơ bản",
      "Quét dữ liệu thành công",
      "Xếp hạng ứng viên",
      "Lên lịch phỏng vấn tự động",
      "Giao diện tiếng việt - dễ dùng",
    ],
    isRecommended: false,
    image: StackStarterImage,
  },
  {
    title: "Gói Standard",
    users: "Bắt đầu với 10 người dùng",
    description: "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
    price: "2.000.000 VND",
    features: [
      "Tất cả tính năng Starter",
      "Đánh giá kĩ năng ứng viên",
      "Phân tích real-time",
      "Báo cáo funnel & tỷ lệ chuyển đổi tuyển",
      "SMS Notification",
    ],
    isRecommended: true,
    image: StackStandardImage,
  },
  {
    title: "Gói Advanced",
    users: "Từ 30 người sử dụng",
    description: "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
    price: "3.000.000 VND",
    features: [
      "Tất cả tính năng Pro",
      "Phân quyền người dùng theo chi nhánh",
      "Lộ trình đào tạo",
    ],
    isRecommended: false,
    image: StackAdvancedImage,
  },
];

export const pricingEnterprise: IPricingPlan = {
  title: "Gói Enterprise",
  users: "Từ 30 người sử dụng",
  description: "Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia",
  image: StackEnterpriseImage,
};
