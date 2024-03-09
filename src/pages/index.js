import * as React from "react";
import Layout from "../components/header/layout";
import Footer from "../components/footer/footer.js";
import RadioPlayer from "../components/radio-player/radio-player.js";
import Carousel from "../components/articleSlider/slider.js";
import * as styles from "../styles/homepage.module.css";
import "../styles/global.css";
import Reviews from "../components/reviews/reviews.js";
import Spotify from "../components/spotifyPlaylists/spotify.js";

const Homepage = () => {
  return (
    <div>
      {/* header and nav bar */}
      <Layout pageTitle="Georgetown Radio"></Layout>

      {/* floating radio player bar */}
      <RadioPlayer />

      <div className={styles.homepageWrap}>
        {/* article carousel */}
        <div className={styles.carouselWrap}>
          <Carousel />
        </div>

        {/* playlists and reviews */}
        <section className={styles.playlistContainer}>
          <div className={styles.reviews}>
            <h2 className={styles.sectionHeader}>Playlists + Reviews</h2>
            <Reviews />
          </div>
          {/* <Spotify /> */}
          <div className={styles.playlists}>
            <h2 className={styles.sectionHeader}>Spotify</h2>
            <Spotify />
          </div>
        </section>
      </div>

      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Homepage;
