import React from "react";
import {Link} from "gatsby";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <div className="main-menu">
      <ul className="navbar">
      <li>
          <Link to="/" activeClassName="active">home</Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">the rotation</Link>
        </li>
        <li>
          <Link to="/shows" activeClassName="active">shows</Link>
        </li>
        <li>
          <Link to="/schedule" activeClassName="active">schedule</Link>
        </li>
        <li>
          <Link to="/dj-services" activeClassName="active">dj services</Link>
        </li>
        <li>
          <Link to="/contact-us" activeClassName="active">contact us</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">about</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;