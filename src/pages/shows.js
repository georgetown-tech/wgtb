import React from "react";
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"
import RadioPlayer from '../components/radio-player/radio-player.js';

const Shows = () => {
  return (
    <container>
      <Layout pageTitle="Shows"/>
      <RadioPlayer/>

      {/* FOOTER */}
      <footer>
        <Footer>
        </Footer>
      </footer>
    </container>
  );
};

export default Shows;