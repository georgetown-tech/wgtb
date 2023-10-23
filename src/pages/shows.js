import React from "react";
import {Link} from "gatsby";

const Shows = () => {
  return (
    <div className="main-menu">
      <ul className="Navbar">
      <li>
          <Link to="/shows/fiona-apples-and-oranges">Fiona Apples and Oranges</Link>
        </li>
        <li>
          <Link to="/shows/bye-bye-miss-american-thighs">Bye bye miss american thighss</Link>
        </li>
        <li>
          <Link to="/shows/unsolicited-and-out-of-the-loop">Unsolicited and out of the loop</Link>
        </li>
        <li>
          <Link to="/shows/no-rock-just-pebbles">No Rock Just Pebbles</Link>
        </li>
      </ul>
    </div>
  );
};

export default Shows;