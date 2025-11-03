import React from "react";
import PricingCard from "./PricingCard";
import {getUsersCountSubtitle} from "../utils/commonFunctions.js";
import StackSimple from '../assets/StackSimple.svg';
import StackMinus from '../assets/StackMinus.svg';
import AdvancedPlanIcon from '../assets/Advanced Plan Icon.svg';
import EnterprisePlanIcon from '../assets/Enterprise Plan Icon.svg';

const plans = [
    {
        title: "Gói Starter",
        description: "Phù hợp với Startup, doanh nghiệp vừa và nhỏ",
        price: 150000,
        usersCount: 3,
        icon: StackSimple,
        features: [
            "Tính năng cơ bản",
            "Quét dữ liệu nhanh chóng",
            "Xếp hạng ứng viên",
            "Lên lịch phỏng vấn tự động",
            "Giao diện tiếng Việt – dễ dùng",
        ],
    },
    {
        title: "Gói Standard",
        description: "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
        price: 2000000,
        usersCount: 10,
        highlight: true,
        icon: StackMinus,
        features: [
            "Tất cả tính năng Starter",
            "Đánh giá kỹ năng ứng viên",
            "Phân tích real-time",
            "Báo cáo funnel & tỷ lệ chuyển đổi tuyển",
            "SMS Notification",
        ],
    },
    {
        title: "Gói Advanced",
        description: "Phù hợp với công ty công nghệ, doanh nghiệp đang scale team",
        price: 3000000,
        usersCount: 30,
        icon: AdvancedPlanIcon,
        features: [
            "Tất cả tính năng Pro",
            "Phân quyền người dùng theo chi nhánh",
            "Lộ trình đào tạo",
        ],
    },
];

const enterprise = {
    title: "Gói Enterprise",
    description: "Phù hợp với tập đoàn bán lẻ, tài chính, đa quốc gia",
    usersCount: 2,
    icon: EnterprisePlanIcon
}

const PricingSection = () => {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-2 text-center">
                <p className="text-blue-500 font-semibold mb-2">BẢNG GIÁ</p>
                <h2 className="text-3xl font-bold mb-4">Pricing & Plan</h2>
                <p className="text-gray-600 mb-12 mx-auto">
                    ABC Company cung cấp nhiều lựa chọn gói linh hoạt, từ startup nhỏ đến
                    tập đoàn lớn đang cần mở rộng quy trình tuyển dụng thông minh với AI.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {plans.map((plan, idx) => (
                        <PricingCard key={idx} {...plan} />
                    ))}
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center gap-4 text-start">
                    <div className="flex items-center font-semibold text-2xl bg-gray-100 rounded-2xl px-4 py-4 h-full">
                        Liên hệ để báo giá gói Enterprise
                    </div>

                    <div className="md:col-span-2 sm:col-span-1 flex flex-col md:flex-row md:items-center items-start justify-between bg-blue-100 rounded-2xl px-4 py-3">
                        <div className="md:mb-0">
                            <div className='flex items-center gap-2 mb-4'>
                                <div className={'rounded p-1 bg-white'}>
                                    <img src={enterprise.icon} alt={enterprise.title} className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {enterprise.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{getUsersCountSubtitle(enterprise.usersCount)}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                {enterprise.description}
                            </p>
                        </div>

                        <button className="w-full md:w-24 bg-white font-medium border border-gray-200 rounded-lg py-2 hover:bg-gray-100 transition cursor-pointer">
                            Liên hệ
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
