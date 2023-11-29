import React from "react";
import {Link} from "gatsby";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <div className="main-menu">
      <ul className="navbar">
      <li>
          <Link to="/" activeClassName="active">Home</Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">The Rotation</Link>
        </li>
        <li>
          <Link to="/shows" activeClassName="active">Shows</Link>
        </li>
        <li>
          <Link to="/schedule" activeClassName="active">Schedule</Link>
        </li>
        <li>
          <Link to="/dj-services" activeClassName="active">Dj Services</Link>
        </li>
        <li>
          <Link to="/contact-us" activeClassName="active">Contact Us</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;