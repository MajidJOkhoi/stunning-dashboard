import React from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const DashCard = ({ title, value, change, changePercentage, isPositive }) => {
  return (
    <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-3xl font-semibold text-gray-900">{value}</div>
      <div className={`flex items-center mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span className={`flex items-center rounded-full px-3 py-1 ${isPositive ? 'bg-green-100' : 'bg-red-100'} ${Math.abs(changePercentage) < 40 ? 'border-2 border-red-500' : 'border-2 border-green-500'}`}>
          {isPositive ? <FiArrowUpRight className="mr-1" /> : <FiArrowDownRight className="mr-1" />} {changePercentage}%
        </span>
        <span className="ml-2 text-sm">{change}</span>
      </div>
    </div>
  );
};

export default DashCard;
