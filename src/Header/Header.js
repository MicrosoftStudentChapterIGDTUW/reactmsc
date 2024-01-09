import React from 'react';
import './Header.css'; 
import MSC_Logo from "./MSC_Logo.png";
const Header = () => {
  return (
    // <>
    // <div className='no-padding'>
    //   <div className="containerheader blue circleBehind">
    //     <a href="/">Home</a>
    //     <a href="/events">Events</a>
    //     <a href="/team">Team</a>
    //     <a href="/contact">Contact</a>
    //     <a href="/faq">FAQ</a>
    //     <a href="/blog">Blogs</a>
    //   </div>
    // </div>
    // </>
    <header class="containerheader blue ">
  <nav>
    <div class="logoheader">
      <img src={MSC_Logo}></img>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li ><a href="/">Home</a></li>
      <li ><a href="/events">Events</a></li>
      <li ><a href="/team">Team</a></li>
      <li ><a href="/contact">Contact Us</a></li>
      <li ><a href="/faq">FAQ</a></li>
      <li ><a href="/blog">Blogs</a></li>
    </ul>
  </nav>
</header>
  );
};

export default Header;
