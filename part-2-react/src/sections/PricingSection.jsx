import React from 'react'
import PackageCard from '../components/PackageCard'
import Button from '../components/ui/Button'

const packages = [
  {
    title: 'Gói Starter',
    subTitle: 'Bắt đầu với 03 người dùng',
    description: 'Phù hợp với Startup, doanh nghiệp vừa và nhỏ',
    icon: '/Starter Plan Icon.png',
    price: 150000,
    features: [
      'Tính năng cơ bản',
      'Quét dữ liệu nhanh chóng',
      'Xếp hạng ứng viên',
      'Lên lịch phỏng vấn tự động',
      'Giao diện tiếng Việt – dễ dùng',
    ],
    href: '#',
  },
  {
    title: 'Gói Standard',
    subTitle: 'Bắt đầu với 10 người dùng',
    description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
    icon: '/StackMinus.png',
    price: 2000000,
    features: [
      'Tất cả tính năng Starter',
      'Đánh giá kĩ năng ứng viên',
      'Phân tích real-time',
      'Báo cáo funnel & tỷ lệ chuyển đổi tuyển',
      'SMS Notification',
    ],
    href: '#',
    recommended: true,
  },
  {
    title: 'Gói Advanced',
    subTitle: 'Từ 30 người sử dụng',
    description: 'Phù hợp với công ty công nghệ, doanh nghiệp đang scale team',
    icon: '/Advanced Plan Icon.png',
    price: 3000000,
    features: ['Tất cả tính năng Pro', 'Phân quyền người dùng theo chi nhánh', 'Lộ trình đào tạo'],
    href: '#',
  },
]

const PricingSection = () => {
  return (
    <section className='py-16 bg-white rounded-lg shadow-md flex flex-col items-center'>
      <span className='text-base font-medium uppercase text-[#397AC4] mb-4'>Bảng giá</span>
      <h2 className='heading-2 text-Neutral-900 mb-7'>Pricing & Plan</h2>
      <p className='max-w-[50rem] px-8 text-center text-base-medium text-Neutral-800 mb-8 md:mb-12'>
        ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ đến tập đoàn lớn đang cần mở rộng quy trình
        tuyển dụng thông minh với AI.
      </p>
      <div className='flex gap-6 px-8 xl:px-20 w-full mb-[1.625rem] flex-col xl:flex-row'>
        {packages.map((pkg) => (
          <PackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-8 xl:px-20'>
        <div className='xl:h-[8.75rem] p-6 flex items-center justify-center rounded-3xl bg-Neutral-100'>
          <p className='heading-4 text-Neutral-900'>Liên hệ để báo giá gói Enterprise</p>
        </div>
        <div className='md:col-span-2 flex w-full justify-between xl:items-center gap-4 flex-col xl:flex-row p-6 bg-[#EAF3FD] rounded-3xl'>
          <div>
            <div className='flex items-center mb-4'>
              <img
                src={'/Enterprise Plan Icon.png'}
                alt='Enterprise icon'
                className='size-12 p-2 rounded-xl mr-[0.875rem] object-cover bg-Neutral-50'
              />
              <div className='flex-1'>
                <h3 className='heading-5 text-Neutral-900 mb-0.5'>Gói Enterprise</h3>
                <p className='text-base-medium text-Neutral-700'>Từ 30 người sử dụng</p>
              </div>
            </div>
            <p className='text-base-medium text-Neutral-700'>Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia</p>
          </div>
          <Button variant='secondary' className='w-full xl:w-auto' href='#'>
            Liên hệ
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
