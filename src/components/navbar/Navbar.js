import React from "react";
import {Link} from "gatsby";
import {navbar} from './navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <div className={navbar}>
      <ul>
      <li>
          <Link to="/homepage">Home</Link>
        </li>
        <li>
          <Link to="/blog">The Rotation</Link>
        </li>
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/dj-services">Dj Services</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;