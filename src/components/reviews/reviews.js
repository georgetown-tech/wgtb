import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as styles from './reviews.module.css';

const Reviews = () => {
  return (
    <section className={styles.reviewsContainer}>
      <div className={styles.reviewItem}>
        <h2 className={styles.reviewTitle}>Single Review</h2>
        <Link to="/single-review">
          <StaticImage
            className={styles.reviewImage}
            src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2021/03/hitlikeagirl-emilyberger.jpg?resize=350%2C200"
            alt="Hit Like A Girl’s Newest Single 'Monsters'"
          />
        </Link>
        <a
          className={styles.reviewLinkTitle} // Apply a class for styling this element
          href="http://georgetownradio.com/hit-like-a-girls-newest-single-monsters-is-an-anthem-for-the-forgotten"
        >
          Hit Like A Girl’s Newest Single “Monsters” is an Anthem for the Forgotten
        </a>
        <p className={styles.reviewText}>
          Hit Like A Girl’s newest single, “Monsters”, came out on March
          16, 2021. "Monsters" is the second single shared from their
          third album, Heart Racer, which will be released on April 2nd
          through...
        </p>
      </div>
      <div className={styles.reviewItem}>
        <h2 className={styles.reviewTitle}>Album Reviews</h2>
        <Link to="/album-review">
          <StaticImage
            className={styles.reviewImage}
            src="https://i0.wp.com/georgetownradio.com/wp/wp-content/uploads/2023/01/og_image.jpg?resize=350%2C200"
            alt="Album Review"
          />
        </Link>
        <a
          className={styles.reviewLinkTitle} // Use the same class here for consistency
          href="http://georgetownradio.com/ecco2k-%e2%84%ae-album-review"
        >
          Ecco2k: ℮ Album Review
        </a>
        <p className={styles.reviewText}>
          Listening to ℮ by Ecco2k is like joining a multiracial
          genderless metrosexual on their quest to consume as many
          psychoactive drugs as possible during a snowy Stockholm
          winter, all in the hopes of...
        </p>
      </div>
    </section>
  );
};

export default Reviews;
