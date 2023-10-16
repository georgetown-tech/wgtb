import React from "react";

const Navbar = () => {
  return (
    <div className="main-menu">
      <ul className="Navbar">
        <li>
          <a href="http://georgetownradio.com/">Home</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/blog">The Rotation</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/shows">Shows</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/schedule">Schedule</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/dj-services">Dj Services</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/contact-us">Contact Us</a>
        </li>
        <li>
          <a href="http://georgetownradio.com/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;