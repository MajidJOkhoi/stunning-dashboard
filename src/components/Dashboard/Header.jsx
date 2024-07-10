import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { SiGooglemessages } from "react-icons/si";
import { IoSearch, IoClose } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  useEffect(() => {
    console.log(user); 
  }, [user]);

  return (
    <div className="flex justify-between items-center p-5 border-b-2">
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 p-2 rounded-lg w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <IoClose
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>

      <div className="flex items-center ml-96 gap-4">
        <div className="p-2 rounded-full border border-gray-300">
          <SiGooglemessages className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer transition duration-200" />
        </div>
        <div className="p-2 rounded-full border border-gray-300">
          <CiBellOn className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer transition duration-200" />
        </div>
      </div>

      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {user && user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          ) : (
            <div className="w-10 h-10 rounded-full border border-gray-300 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">N/A</span>
            </div>
          )}
          <span className="ml-2 font-medium">{user ? user.fullName : 'Loading...'}</span>
          <RxCaretDown className="ml-1 text-gray-500" />
        </div>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden animate-slide-down z-10">
            <ul>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">
                <FaUser className="mr-3 text-gray-500" />
                <span> {user.fullName} </span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">
                <FaCog className="mr-3 text-gray-500" />
                <span>Settings</span>
              </li>
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-3 text-gray-500" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
