import React, { useState } from 'react';
import { Line, Bar, Radar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, ArcElement, Title, Tooltip, Legend);

const SalesGrowthChart = () => {
  const [salesData, setSalesData] = useState([100, 200, 150, 300, 200, 350, 400]);
  const [selectedCharts, setSelectedCharts] = useState({
    line: true,
    bar: false,
    radar: false,
    pie: false,
    doughnut: false,
  });

  const handleInputChange = (e, index) => {
    const newSalesData = [...salesData];
    newSalesData[index] = parseInt(e.target.value, 10);
    setSalesData(newSalesData);
  };

  const handleChartChange = (e) => {
    setSelectedCharts({ ...selectedCharts, [e.target.name]: e.target.checked });
  };

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        type: 'line',
        label: 'Number of Items Sold (Line)',
        data: salesData,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        hidden: !selectedCharts.line,
      },
      {
        type: 'bar',
        label: 'Number of Items Sold (Bar)',
        data: salesData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        hidden: !selectedCharts.bar,
      },
    ],
  };

  

  const pieData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: salesData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(199, 199, 199, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4A5568',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Weekly Sales Report',
        color: '#2D3748',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
          color: '#4A5568',
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#4A5568',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Clients',
          color: '#4A5568',
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#4A5568',
        },
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-xl shadow-lg max-w-4xl mx-auto h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold text-gray-900">Weekly Progress</h2>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input type="checkbox" name="line" checked={selectedCharts.line} onChange={handleChartChange} className="mr-2" />
            Line
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="bar" checked={selectedCharts.bar} onChange={handleChartChange} className="mr-2" />
            Bar
          </label>
        
          <label className="flex items-center">
            <input type="checkbox" name="pie" checked={selectedCharts.pie} onChange={handleChartChange} className="mr-2" />
            Pie
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="doughnut" checked={selectedCharts.doughnut} onChange={handleChartChange} className="mr-2" />
            Doughnut
          </label>
     
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="flex flex-col items-center w-auto mb-0 ">
            <label className="block text-gray-700 text-xs font-bold mb-1">{day}</label>
            <input
              type="number"
              value={salesData[index]}
              onChange={(e) => handleInputChange(e, index)}
              className="w-12 md:w-16 px-2 py-1 border border-gray-300 rounded-md text-xs"
            />
          </div>
        ))}
        </div>
      </div>
   
      <div className="h-[260px] relative">
        {selectedCharts.line && (
          <div className="absolute inset-0 w-full h-full transition-transform duration-700">
            <Line data={data} options={options} />
          </div>
        )}
        {selectedCharts.bar && (
          <div className="absolute inset-0 w-full h-full transition-transform duration-700">
            <Bar data={data} options={options} />
          </div>
        )}
        {selectedCharts.radar && (
          <div className="absolute inset-0 w-full h-full transition-transform duration-700">
            <Radar data={radarData} options={options} />
          </div>
        )}
        {selectedCharts.pie && (
          <div className="absolute inset-0 w-full h-full transition-transform duration-700">
            <Pie data={pieData} options={options} />
          </div>
        )}
        {selectedCharts.doughnut && (
          <div className="absolute inset-0 w-full h-full transition-transform duration-700">
            <Doughnut data={pieData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesGrowthChart;
