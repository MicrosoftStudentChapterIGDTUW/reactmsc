import React from "react";
import "./Header.css";
import MSC_Logo from "./MSC_Logo.png";
const Header = () => {
  return (
    <header className="containerheader blue ">
      <nav>
        <div className="logoheader">
          <img src={MSC_Logo}></img>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
