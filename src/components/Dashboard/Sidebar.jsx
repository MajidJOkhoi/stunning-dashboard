import React from "react";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaUsers,
  FaHandshake,
  FaCalendarAlt,
  FaTasks,
  FaAddressBook,
  FaUserTie,
  FaBullhorn,
  FaFileAlt,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import logo from "../../assets/logo.png";
const Sidebar = () => {
  return (
    <div className="w-72 bg-white shadow-lg p-6 flex flex-col rounded-lg h-full">
      <div className="flex items-baseline text-2xl font-extrabold mb-10 text-gray-800">
        <img
          src={logo}
          alt="Icreativez Logo"
          className="mr-2 h-8 w-auto pt-1"
        />
        <span className="text-[#A22B2D] text-4xl font-extrabold font-serif transition-colors duration-200">
          I
        </span>
        <span className="text-black transition-colors duration-200">
          creative
        </span>
        <span className="text-[#A22B2D] text-4xl font-serif font-extrabold transition-colors duration-200">
          Z
        </span>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <MdDashboard className="text-green-600" />
            <Link
              to="/"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <LuTableProperties className="text-green-600" />
            <Link
              to="/properties"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Properties
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaProjectDiagram className="text-green-600" />
            <Link
              to="/project"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Project
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaUsers className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Leads
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaHandshake className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Agreement
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaCalendarAlt className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Calendar
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaTasks className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Activities
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaAddressBook className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Contacts & Organizations
            </Link>
          </li>

          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaBullhorn className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Campaigns
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaFileAlt className="text-green-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Documents
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-44">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaCog className="text-gray-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Setting
            </Link>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-100 p-3 rounded-lg transition duration-200">
            <FaQuestionCircle className="text-gray-600" />
            <Link
              to="#"
              className="text-gray-800 font-medium hover:text-green-800"
            >
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
