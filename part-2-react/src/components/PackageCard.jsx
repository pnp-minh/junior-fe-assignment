import React from 'react'
import Button from './ui/Button'
import { cn } from '../lib/utils'

const PackageCard = ({ title, subTitle, description, icon, price, features, recommended, href }) => {
  return (
    <div className={cn('w-full flex-1 p-6 rounded-3xl', recommended ? 'bg-[#EAF3FD]' : 'border border-Neutral-300')}>
      <div className='flex items-center mb-4'>
        <img
          src={icon}
          alt={`${title} icon`}
          className={cn(
            'size-12 p-2 rounded-xl mr-[0.875rem] object-cover',
            recommended ? 'bg-Neutral-50' : 'bg-[#EAF3FD]'
          )}
        />
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <h3 className='heading-5 text-Neutral-900 mb-0.5'>{title}</h3>
            {recommended && <span className='p-2 rounded-lg bg-[#397AC4] text-small-medium text-white'>Đề xuất</span>}
          </div>
          <p className='text-base-medium text-Neutral-700'>{subTitle}</p>
        </div>
      </div>
      <p className='text-base-medium text-Neutral-700 mb-8 min-h-12'>{description}</p>
      <span className='text-base-medium text-Neutral-600'>Chỉ từ</span>
      <div className='mb-8'>
        <span className='heading-3 text-Neutral-900'>{price.toLocaleString('vi-VN')} VND</span>
        <span className='text-base-medium text-Neutral-600'>/tháng</span>
      </div>
      <Button className='mb-8 w-full' href={href}>
        Choose Plan
      </Button>
      <ul className='space-y-4'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <img src='/CheckCircle.png' alt='check icon' className='object-cover size-4 mr-2' />
            <span className='text-small-medium text-Neutral-800'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PackageCard
