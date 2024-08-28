import React, { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaRedo,
  FaUsers,
  FaTruck,
  FaStore,
  FaLink,
  FaCalculator,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} className="text-2xl text-gray-700">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 lg:relative lg:flex lg:flex-col`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-700">My Dashboard</h2>
        </div>
        <ul className="mt-4 flex-1">
          <li className="px-4 py-3 flex items-center hover:bg-purple-50 text-purple-600">
            <FaHome className="mr-3" /> <span>Dashboard</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaBox className="mr-3" /> <span>Inventory</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaShoppingCart className="mr-3" /> <span>Order</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaRedo className="mr-3" /> <span>Returns</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaUsers className="mr-3" /> <span>Customers</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaTruck className="mr-3" /> <span>Shipping</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaStore className="mr-3" /> <span>Channel</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaLink className="mr-3" /> <span>Integrations</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaCalculator className="mr-3" /> <span>Calculators</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaChartBar className="mr-3" /> <span>Reports</span>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-100 text-gray-700">
            <FaCog className="mr-3" /> <span>Account</span>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
