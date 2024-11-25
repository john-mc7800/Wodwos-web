import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#272821]">
    <div className="w-[90%] mx-auto max-w-[1440px] grid py-12 xl:grid-cols-2">
      <div className="">
      <h3 className="text-lg font-bold text-[#f72d74]">services</h3>
      <ul className="mt-2 sm:columns-2">
<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Laravel E-commerce Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">PHP E-commerce Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">WordPress E-commerce Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Shopify Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">React Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Vue.js Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Angular  Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">PHP Software Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">CodeIgniter Software Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Laravel Software Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">MERN  Software Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">WordPress  Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Magento Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Drupal Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">BigCommerce Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Joomla Software Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Social Media Creatives </Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Website UI/UX Development</Link></li>

<li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Mobile App UI/UX Development</Link></li>
 </ul>

      </div>


<div className="grid sm:grid-cols-2 2xl:grid-cols-4">
<div className="mt-4">
<h3 className="text-lg font-bold text-[#f72d74]">Quick Links</h3>
<ul className="mt-2">
<li><Link a={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Contact US</Link></li>
</ul>
</div>

<div className="mt-4 ">
<h3 className="text-lg font-bold text-[#f72d74]">Contact US</h3>
<ul className="mt-2">
  <li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">Info@wodwes.com</Link></li>
  <li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">sales@wodwes.com</Link></li>
  <li><Link to={"/"} className="text-base font-normal leading-8 text-white hover:text-[#f72d74]">+1 917 000 3956</Link></li>
</ul>
</div>

<div className="mt-4 2xl:col-span-2 2xl:pl-6">
<h3 className="text-lg font-bold text-[#f72d74]">NEWSLETTER</h3>
<input type="text" className="mt-2 w-full py-3.5 pl-4 text-base outline-none" placeholder="Enter your email address" />
<Link to={"/contact"} className="flex items-center justify-center border-2    hover:bg-transparent hover:text-[#f72d74] font-bold bg-[#f72d74] border-[#f72d74] mt-3 w-full text-white py-3 px-5">Get Started</Link>

</div>
<div className="ml-auto mt-6 sm:pt-14 2xl:col-span-4">
  <div className="mt-4 flex flex-row gap-x-4">
    <Link to={""} className="flex items-center space-x-4">
      {/* Facebook Icon */}
      <img
        src="./svgexport-8.png"
        className="w-8 h-8  border border-white rounded-2xl hover:border-[#f72d74]"
        alt="Facebook"
      />
      </Link>
      <Link>
      {/* LinkedIn Icon */}
      <img
        src="./svgexport-9.png"
        className="w-8 h-8 border border-white rounded-2xl hover:border-[#f72d74]"
        alt="LinkedIn"
      />
    </Link>
  </div>
</div>
</div>

       </div>
<p className="py-4 text-center text-sm text-[#a9a9ab]">&#169;  Copyright 2023 All right reserved by Wodwes</p>
    </footer>
  )
}

export default Footer