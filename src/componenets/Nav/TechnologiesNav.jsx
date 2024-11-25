import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const technologiesMenu = {
    label: 'Technologies',
    dropdownItems: [
      {
        items: [
          { logo: 'healthlogo.png', label: 'iOS Developers', to: '/ios-developers' },
          { logo: 'healthlogo.png', label: 'Android Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'Node.js Developers', to: '/' },
        ],
      },
      {
        items: [
          { logo: 'healthlogo.png', label: 'Blockchain Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'TypeScript Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'MEAN Stack Developers', to: '/' },
        ],
      },
      {
        items: [
          { logo: 'healthlogo.png', label: 'MERN Stack Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'Python Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'Mobile Application Developers', to: '/' },
        ],
      },
      {
        items: [
          { logo: 'healthlogo.png', label: 'WordPress Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'React.js Developers', to: '/' },
          { logo: 'healthlogo.png', label: 'Node.js Developers', to: '/' },
        ],
      },
    ],
  };

  const isDropdownItemActive = technologiesMenu.dropdownItems.some((group) => group.items.some((item) => location.pathname === item.to));

  return (
    <div>
      <li ref={dropdownRef} className="relative">
        <button className={`flex items-center ${isDropdownItemActive ? 'text-[#f72d74]' : ''}`} onClick={toggleDropdown}>
          {technologiesMenu.label}
          <IoIosArrowDown className="ml-2 text-lg font-[500]" />
        </button>

        {openDropdown && (
          <div className="absolute -right-64 top-12 z-50 mt-2 w-[90vw] max-w-7xl transform rounded-lg bg-white p-8 shadow-xl">
            <div className="grid grid-cols-4 gap-8">
              {technologiesMenu.dropdownItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="flex flex-col space-y-2">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <img src={item.logo} alt={`${item.label} logo`} className="h-6 w-6" />
                      <NavLink to={item.to} className={({ isActive }) => `block text-sm transition-colors duration-150 hover:text-[#f72d74] ${isActive ? 'text-[#f72d74]' : 'text-gray-600'}`}>
                        {item.label}
                      </NavLink>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
    </div>
  );
}
