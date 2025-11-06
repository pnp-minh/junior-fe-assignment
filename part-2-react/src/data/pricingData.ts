import { PricingData } from '../types/plan';

export const pricingData: PricingData = {
  plans: [
    {
      id: 'starter',
      name: 'Gói Starter',
      title: 'Gói Starter',
      subtitle: 'Bắt đầu với 03 người dùng',
      description: 'Phù hợp với Startup, doanh nghiệp vừa và nhỏ',
      price: 150000,
      icon: '/Stack.svg',
      features: [
        { id: 'f1', text: 'Tính năng cơ bản' },
        { id: 'f2', text: 'Quét dữ liệu nhanh chóng' },
        { id: 'f3', text: 'Xếp hạng ứng viên' },
        { id: 'f4', text: 'Lên lịch phỏng vấn tự động' },
        { id: 'f5', text: 'Giao diện tiếng Việt – dễ dùng' }
      ]
    },
    {
      id: 'standard',
      name: 'Gói Standard',
      title: 'Gói Standard',
      subtitle: 'Bắt đầu với 10 người dùng',
      description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
      price: 2000000,
      icon: '/StackMinus.svg',
      isRecommended: true,
      features: [
        { id: 'f1', text: 'Tất cả tính năng Starter' },
        { id: 'f2', text: 'Đánh giá kỹ năng ứng viên' },
        { id: 'f3', text: 'Phân tích real-time' },
        { id: 'f4', text: 'Báo cáo funnel & tỷ lệ chuyển đổi tuyển' },
        { id: 'f5', text: 'SMS Notification' }
      ]
    },
    {
      id: 'advanced',
      name: 'Gói Advanced',
      title: 'Gói Advanced',
      subtitle: 'Từ 30 người sử dụng',
      description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
      price: 3000000,
      icon: '/StackSimple.svg',
      features: [
        { id: 'f1', text: 'Tất cả tính năng Pro' },
        { id: 'f2', text: 'Phân quyền người dùng theo chi nhánh' },
        { id: 'f3', text: 'Lộ trình đào tạo' }
      ]
    }
  ],
};

