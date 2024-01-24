import React from "react";
import {Link} from "gatsby";
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"

const Shows = () => {
  return (
    <container>
      <Layout pageTitle="Shows"/>
      <div>
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
      {/* FOOTER */}
      <footer>
        <Footer>
        </Footer>
      </footer>
    </container>
  );
};

export default Shows;