import React from 'react';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';

const NewProperties = () => {
  const properties = [
    {
      name: 'Banking App',
      price: '$9,800,000',
      des: 'Create Bank App With finger Scan Authentication',
      img: img12,
    },
    {
      name: 'Hospital Management App',
      price: '$650,000',
      des: 'Create Patient Management App Automate Mannual Process',
      img: img13,
    },
    {
      name: 'Digital Libraray Quest',
      price: '$600,000',
      des: 'Create Digital Library App Automate Libraray Quest',
      img: img13,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg  max-w-md mx-auto md:max-w-3xl ">
      <div className="flex justify-between items-center ">
        <h2 className="text-md font-bold"> New Projects </h2>
        <button className="relative flex items-center space-x-2 cursor-pointer text-gray-900 hover:text-purple-700 transition duration-200 border-2 border-gray-500 rounded-lg p-1 text-xs">
          See all
        </button>
      </div>
      <ul className="flex flex-col  h-full">
        {properties.map((property, index) => (
          <li key={index} className="flex items-center last:mb-0">
            <img 
              src={property.img} 
              alt={property.name} 
              className="w-12 h-12 md:w-16 md:h-12 rounded-lg mr-2 transform transition-transform duration-300 hover:scale-105" 
            />
            <div className="flex-1">
              <div className="font-semibold text-sm md:text-md text-gray-700">{property.name}</div>
              <div className="text-md md:text-lg font-bold text-purple-700">{property.price}</div>
              <div className="text-gray-600 text-xs md:text-sm truncate">{property.des}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewProperties;
