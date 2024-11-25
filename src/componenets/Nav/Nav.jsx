import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { FaShoppingCart, FaLaptopCode, FaCogs, FaWordpress } from 'react-icons/fa';
import TechnologiesNav from '../Nav/TechnologiesNav';
import IndustryNav from './IndustryNav';

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

  const servicesMenu = {
    label: 'Services',
    to: '/services',
    dropdown: true,
    dropdownItems: {
      eCommerceDevelopment: {
        title: 'E-commerce Development',
        icon: <FaShoppingCart className="mb-2 h-6 w-6" />,
        items: [
          { label: 'Laravel E-commerce development', to: '/services/laravel' },
          { label: 'PHP E-commerce development', to: '/services/php' },
          { label: 'WordPress E-commerce Development', to: '/services/WordPress' },
          { label: 'Shopify Development', to: '/services/Shopify' },
        ],
      },
      frontEndDevelopment: {
        title: 'Front-end Development',
        icon: <FaLaptopCode className="mb-2 h-6 w-6" />,
        items: [
          { label: 'React Development', to: '/services/React' },
          { label: 'Vue.js Development', to: '/services/Vue' },
          { label: 'Angular Development', to: '/services/Angular' },
        ],
      },
      softwareDevelopment: {
        title: 'Software Development',
        icon: <FaCogs className="mb-2 h-6 w-6" />,
        items: [
          { label: 'PHP Software Development', to: '/services/PHP-Software' },
          { label: 'CodeIgniter Development', to: '/services/CodeIgniter' },
          { label: 'Laravel Software Development', to: '/services/Laravel-Software' },
          { label: 'MERN Software Development', to: '/services/MERN' },
        ],
      },
      cmsDevelopment: {
        title: 'CMS Development',
        icon: <FaWordpress className="mb-2 h-6 w-6" />,
        items: [
          { label: 'WordPress Development', to: '/services/WordPress' },
          { label: 'Magento Development', to: '/services/Magento' },
          { label: 'Drupal Software Development', to: '/services/Drupal' },
          { label: 'BigCommerce Development', to: '/services/BigCommerce' },
          { label: 'Joomla Development', to: '/services/Joomla' },
        ],
      },
    },
  };

  const isDropdownItemActive = Object.values(servicesMenu.dropdownItems).some((category) => category.items.some((item) => location.pathname === item.to));

  return (
    <div>
      <div className="relative hidden items-center justify-between px-8 lg:flex">
        <div className="w-56 p-4">
          <img src="/wodweslogo.png" alt="Logo" />
        </div>

        <ul className="flex items-center gap-4 space-x-4 pr-8 font-[500] lg:flex-row">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#f72d74]' : '')}>
              Home
            </NavLink>
          </li>

          <li ref={dropdownRef} className="relative">
            <button className={`flex items-center ${isDropdownItemActive ? 'text-[#f72d74]' : ''}`} onClick={toggleDropdown}>
              {servicesMenu.label}
              <IoIosArrowDown className="ml-2 text-lg font-[500]" />
            </button>

            {openDropdown && (
              <div className="absolute -left-80 top-full z-50 mt-2 w-[90vw] max-w-7xl -translate-x-1/4 transform rounded-lg bg-white p-8 shadow-xl">
                <div className="grid grid-cols-4 gap-8">
                  {Object.values(servicesMenu.dropdownItems).map((category, categoryIndex) => (
                    <div key={categoryIndex} className="flex flex-col">
                      <div className="mb-4 flex items-center">
                        {category.icon}
                        <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, index) => (
                          <li key={index}>
                            <NavLink to={item.to} className={({ isActive }) => `block text-sm transition-colors duration-150 hover:text-[#f72d74] ${isActive ? 'text-[#f72d74]' : 'text-gray-600'}`}>
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <IndustryNav />
          </li>
          <li>
            <TechnologiesNav />
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-[#f72d74]' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="ml-4 bg-[#f72d74] px-5 py-3 font-bold text-white hover:bg-[#f74d74]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
