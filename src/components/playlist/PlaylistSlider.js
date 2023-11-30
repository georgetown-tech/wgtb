import React, { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styles from './PlaylistSlider.module.css';

// Dummy data for the playlist items
const playlistItems = [
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/09/fiona-apples-and-oranges.png?resize=380%2C380",
    link: "/fao-fall-rotation",
    title: "FA&O: Fall Rotation Recommendations",
    description: "Check out the latest fall rotation with FA&O's handpicked tracks to set the mood for the season.",
  },
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/02/Screen-Shot-2022-02-21-at-2.55.23-PM.png?resize=380%2C380",
    link: "/michelle-and-sidney-gish",
    title: "Preview + Playlist: MICHELLE and Sidney Gish @ BDA",
    description: "Get a preview of MICHELLE and Sidney Gish's upcoming performance at BDA with our exclusive playlist.",
  },
  {
    imageSrc: "https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2022/01/4641-1.jpeg?resize=380%2C380",
    link: "/honeymoon-in-paris",
    title: "Playlist: Honeymoon in Paris",
    description: "Immerse yourself in the romance of Paris with this lovingly curated honeymoon playlist.",
  },
  // ...add more playlist items as needed
];

const PlaylistSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = playlistItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(playlistItems) || playlistItems.length <= 0) {
    return null; // If there are no slides, don't render the component
  }

  return (
    <section className={styles.playlistSlider}>
      <h2 className={styles.playlistTitle}>Playlists</h2>
      <button className={styles.leftArrow} onClick={prevSlide}>&lt;</button>
      <button className={styles.rightArrow} onClick={nextSlide}>&gt;</button>
      <div className={styles.slider}>
        {playlistItems.map((item, index) => (
          <div
            className={index === current ? styles.playlistSlideActive : styles.playlistSlide}
            key={index}
          >
            {index === current && (
              <Link to={item.link} className={styles.playlistContent}>
                <StaticImage src={item.imageSrc} alt={item.title} className={styles.playlistImage} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaylistSlider;





