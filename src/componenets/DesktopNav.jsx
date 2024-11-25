import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const servicesMenu = {
    label: 'Services',
    to: '/services',
    dropdown: true,
    dropdownItems: {
      eCommerceDevelopment: {
        logo: './e-commerce.png',
        title: 'E-commerce Development',
        items: [
          { label: 'Laravel E-commerce Development', to: '/services/laravel' },
          { label: 'PHP E-commerce Development', to: '/services/php' },
          { label: 'WordPress E-commerce Development', to: '/services/wordpress' },
          { label: 'Shopify Development', to: '/services/shopify' },
        ],
      },
      frontEndDevelopment: {
        logo: './front-end.png',
        title: 'Front-end Development',
        items: [
          { label: 'React Development', to: '/services/react' },
          { label: 'Vue.js Development', to: '/services/vue' },
          { label: 'Angular Development', to: '/services/angular' },
        ],
      },
      softwareDevelopment: {
        logo: './software.png',
        title: 'Software Development',
        items: [
          { label: 'PHP Software Development', to: '/services/php-software' },
          { label: 'CodeIgniter Development', to: '/services/codeigniter' },
          { label: 'Laravel Software Development', to: '/services/laravel-software' },
          { label: 'MERN Software Development', to: '/services/mern' },
        ],
      },
      cmsDevelopment: {
        logo: './cms.png',
        title: 'CMS Development',
        items: [
          { label: 'WordPress Development', to: '/services/wordpress' },
          { label: 'Magento Development', to: '/services/magento' },
          { label: 'Drupal Software Development', to: '/services/drupal' },
          { label: 'BigCommerce Development', to: '/services/bigcommerce' },
          { label: 'Joomla Development', to: '/services/joomla' },
        ],
      },
    },
  };

  return (
    <div>
      <div className="relative hidden items-center justify-between px-8 lg:flex">
        {/* Logo */}
        <div className="w-56 p-4">
          <img src="/wodweslogo.png" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 space-x-4 pr-8 font-[500] lg:flex-row">
          {/* Home Link */}
          <li>
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-[#f72d74]' : ''}`}>
              Home
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button className={`flex items-center ${openDropdown ? 'text-[#f72d74]' : ''}`} onClick={toggleDropdown}>
              Services
              <IoIosArrowDown className="ml-2 text-lg font-[500]" />
            </button>

            {openDropdown && (
              <div className="absolute left-0 mt-2 flex rounded-md bg-white shadow-lg">
                {Object.entries(servicesMenu.dropdownItems).map(([key, category]) => (
                  <div key={key} className="border-r p-4 last:border-none">
                    <div className="mb-2 flex items-center">
                      <img src={category.logo} alt={category.title} className="mr-2 h-6 w-6" />
                      <span className="font-bold text-gray-800">{category.title}</span>
                    </div>
                    <ul>
                      {category.items.map((item, index) => (
                        <li key={index} className="py-1 hover:bg-gray-100">
                          <NavLink to={item.to} className={({ isActive }) => `${isActive ? 'text-[#f72d74]' : 'text-gray-700'} hover:text-[#f72d74]`}>
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Other Links */}
          <li>
            <NavLink to="/industries" className={({ isActive }) => `${isActive ? 'text-[#f72d74]' : ''}`}>
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/technologies" className={({ isActive }) => `${isActive ? 'text-[#f72d74]' : ''}`}>
              Technologies
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => `${isActive ? 'text-[#f72d74]' : ''}`}>
              Portfolio
            </NavLink>
          </li>

          {/* Contact Us Button */}
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
