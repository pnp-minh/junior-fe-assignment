import React from "react";
import {getUsersCountSubtitle} from "../utils/commonFunctions.js";

const PricingCard = ({
                         title,
                         description,
                         price,
                         usersCount,
                         features,
                         highlight,
                         icon
                     }) => {

    return (
        <div
            className={`relative text-start rounded-2xl px-4 py-3 flex flex-col shadow-sm
        ${highlight ? "bg-blue-100" : "bg-white border border-gray-200"}`}
        >
            {highlight && (
                <span className="absolute top-3 right-4 bg-sky-600 text-white font-semibold rounded px-1"
                      style={{fontSize: "13px"}}>
                    Đề xuất
                </span>
            )}
            <div>
                <div className='flex items-center gap-2 mb-3'>
                    <div className={`rounded p-1 ${!highlight ? "bg-blue-100" : "bg-white"}`}>
                        <img src={icon} alt={title} className="w-5 h-5"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">{getUsersCountSubtitle(usersCount)}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 h-[2.75rem] line-clamp-2">{description}</p>

                <div className="mb-4">
                    <p className='text-gray-500 text-sm'>Chỉ từ</p>
                    <div className='-mt-1'>
                        <p className="md:text-3xl text-3xl font-bold tracking-wider card-pricing">{new Intl.NumberFormat('vi-VN').format(price)}
                            <span className='tracking-normal ml-1'>VND</span>
                            <span className="text-sm font-normal text-gray-500 mb-1 tracking-normal">/tháng</span>
                        </p>
                    </div>
                </div>

                <button
                    className="w-full bg-black font-medium text-sm text-white py-2 rounded-lg hover:opacity-90 transition cursor-pointer">
                    Tư vấn dùng thử
                </button>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <svg
                                className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5 bg-blue-200 rounded-full border border-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingCard;
