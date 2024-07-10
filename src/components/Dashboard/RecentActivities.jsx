import React from 'react';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import user6 from '../../assets/user-6.png';

const RecentActivities = () => {
  const activities = [
    {
      name: 'John Smith',
      property: 'Seo Website',
      type: 'SEO',
      price: '$897,500',
      status: 'Complete',
      img: user3,
    },
    {
      name: 'Asif Jutt',
      property: ' Online Authentication',
      type: 'Web App',
      price: '$405,000',
      status: 'Pending',
      img: user4,
    },
    {
      name: 'Aleen Alexa',
      property: 'Food Scan Ai App',
      type: 'AI & ML ',
      price: '$455',
      status: 'Complete',
      img: user6,
    },{
      name: 'Alia ',
      property: 'Product Recommend System',
      type: 'AI & ML ',
      price: '$455',
      status: 'Complete',
      img: user6,
    }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-2xl ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Recent Activities</h2>
        <button className="relative flex items-center space-x-2 cursor-pointer text-gray-900 hover:text-purple-700 transition duration-200 border-2 border-gray-500 rounded-lg p-1 text-xs">
          This Week
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-xs ">
          <thead>
            <tr>
              <th className="py-1 px-2 border-b text-left font-semibold text-gray-700">Name</th>
              <th className="py-1 px-2 border-b text-left font-semibold text-gray-700">Project Name</th>
              <th className="py-1 px-2 border-b text-left font-semibold text-gray-700">Domain</th>
              <th className="py-1 px-2 border-b text-left font-semibold text-gray-700">Price</th>
              <th className="py-1 px-2 border-b text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="hover:bg-gray-50 p-2">
                <td className="py-1 px-2 border-b flex items-center space-x-2 ">
                  <img src={activity.img} alt={activity.name} className="w-8 h-8 rounded-full" />
                  <div className="font-semibold text-gray-700">{activity.name}</div>
                </td>
                <td className="py-1 px-2 border-b text-gray-600 truncate">{activity.property}</td>
                <td className="py-1 px-2 border-b text-gray-600">{activity.type}</td>
                <td className="py-1 px-2 border-b text-gray-600">{activity.price}</td>
                <td className="py-1 px-2 border-b text-gray-600">
                  <span className={`font-bold ${activity.status === 'Complete' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;
