import React, { useState } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { CiImport } from "react-icons/ci";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import DashCard from './DashCard'; 

const DashHead = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [file, setFile] = useState(null);

  const handleImportClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };

  return (
    <div className='p-4'>
      <div className="flex justify-between items-center  rounded-lg shadow-sm p-5 mb-5">
        <div className="flex items-center space-x-4">
          <div className='flex items-end gap-3'>
            <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
            <p className="text-md text-gray-500">Last update {formatDate(selectedDate)}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="relative flex items-center space-x-2 cursor-pointer text-gray-900 hover:text-purple-700 transition duration-200 border-2 border-gray-500 rounded-lg p-2"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="flex items-center justify-center w-10 h-6">
              <CiCalendarDate className="text-2xl" />
            </div>
            <span className="text-lg font-medium">This Week</span>
            <RxCaretDown className="text-xl" />
            {showCalendar && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-10">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>
            )}
          </div>
          <div
            className="relative flex items-center space-x-1 cursor-pointer text-gray-900 hover:text-purple-700 transition duration-200 border-2 border-purple-500 rounded-lg p-2"
            onClick={handleImportClick}
          >
            <div className="flex items-center justify-center w-10 h-6">
              <CiImport className="text-2xl" />
            </div>
            <button className="text-lg font-medium pr-3 ">Import</button>
            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
            
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashCard title="Clients In 17 Plus Country in the World " value=" 100 +" change="Client Across World" changePercentage={100} isPositive={true} />
        <DashCard title="Yearly Growth " value="200" change="Higher than last month" changePercentage={200} isPositive={true} />
        <DashCard title="Experience upto " value="11" change="Years" changePercentage={60} isPositive={true} />
        <DashCard title="Equipped with " value=" 40 +" change="Technology" changePercentage={40} isPositive={true} />
      </div>
    </div>
  );
};

export default DashHead;
