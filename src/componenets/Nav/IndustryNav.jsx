import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleindustryDropdown = () => {
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

  const industriesMenu = {
    label: 'Industries',
    dropdownItems: [
      {
        items: [
          { logo: './healthlogo.png', label: 'Healthcare', to: '/industries/healthcare' },
          { logo: './travel.png', label: 'Travel', to: '/industries/travel' },
          { logo: './insurance.png', label: 'Insurance', to: '/industries/insurance' },
        ],
      },
      {
        items: [
          { logo: './manufacturing.png', label: 'Manufacturing', to: '/industries/manufacturing' },
          { logo: './transportation.png', label: 'Transportation', to: '/industries/transportation' },
        ],
      },
      {
        items: [
          { logo: './edtech.png', label: 'EdTech', to: '/industries/edtech' },
          { logo: './enterprise.png', label: 'Enterprise', to: '/industries/enterprise' },
        ],
      },
      {
        items: [
          { logo: './media.png', label: 'Media', to: '/industries/media' },
          { logo: './telecom.png', label: 'Telecom', to: '/industries/telecom' },
        ],
      },
    ],
  };

  const isindustryDropdownItemActive = industriesMenu.dropdownItems.some((group) => group.items.some((item) => location.pathname === item.to));

  return (
    <div>
      <li ref={dropdownRef} className="relative">
        <button className={`flex items-center ${isindustryDropdownItemActive ? 'text-[#f72d74]' : ''}`} onClick={toggleindustryDropdown}>
          {industriesMenu.label}
          <IoIosArrowDown className="ml-2 text-lg font-[500]" />
        </button>

        {openDropdown && (
          <div className="absolute -right-96 top-12 z-50 mt-2 w-[90vw] max-w-7xl transform rounded-lg bg-white p-8 shadow-xl">
            <div className="grid grid-cols-4 gap-8">
              {industriesMenu.dropdownItems.map((category, categoryIndex) => (
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
