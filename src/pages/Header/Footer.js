import React from 'react';
import MSC_Logo from "./MSC_Logo.png";
import './Footer.css'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#041e55] mt-8">
      <div className="f-item-con grid grid-cols-1 justify-around p-6 md:w-full screens-sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="logo my-4 flex justify-center">
          <img src={MSC_Logo} alt="MSC" className="w-[180px]"/>
        </div>
        <div className="useful-links my-4 w-full md:w-auto text-center md:text-left">
          <div className="text-white text-xl mb-2">Links</div>
          <ul className="text-white text-sm space-y-2 grid grid-cols-1">
            <li><a href="/" className="hover:text-white text-[#d4d4d4]">Home</a></li>
            <li><a href="/blog" className="hover:text-white text-[#d4d4d4]">Blogs</a></li>
            <li><a href="/events" className="hover:text-white text-[#d4d4d4]">Events</a></li>
            <li><a href="/team" className="hover:text-white text-[#d4d4d4]">Team</a></li>
            <li><a href="/faq" className="hover:text-white text-[#d4d4d4]">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white text-[#d4d4d4]">Contact Us</a></li>
          </ul>
        </div>
        <div className="help-sec my-4 w-full md:w-auto text-center md:text-left">
          <div className="text-white text-xl mb-2">Address</div>
          <ul className="text-white text-sm space-y-2 grid grid-cols-1">
            <li>IGDTUW New Delhi, India</li>
          </ul>
        </div>
        <div className="g-i-t my-4 flex justify-center">
          <div>
            <div className="text-white text-xl mb-2 text-center md:text-left">Get in Touch</div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://twitter.com/IgdtuwMsc" className="bg-[hsla(0,0%,100%,.2)] p-2 rounded-full text-white hover:bg-white hover:text-[#24262b] transition-all"><FaTwitter className="text-2xl" /></a>
              <a href="https://www.instagram.com/msc.igdtuw/" className="bg-[hsla(0,0%,100%,.2)] p-2 rounded-full text-white hover:bg-white hover:text-[#24262b] transition-all"><FaInstagram className="text-2xl" /></a>
              <a href="https://in.linkedin.com/in/msc-igdtuw" className="bg-[hsla(0,0%,100%,.2)] p-2 rounded-full text-white hover:bg-white hover:text-[#24262b] transition-all"><FaLinkedin className="text-2xl" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#041e55] text-white text-center p-4">
        MLSA-IGDTUW © 2022 | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;