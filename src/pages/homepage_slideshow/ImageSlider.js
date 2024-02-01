import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import { motion, AnimatePresence } from "framer-motion";
import * as styles from './ImageSlider.module.css';

const Preview = ({ previewData }) => {
  return (
        <Link to={`/${previewData.url}`}>
          <div className={styles.articleContainer} key={previewData.id}>
            <img className={styles.articleImage}
              src={previewData.image.url}
              alt={previewData.title}
            />
            <div className={styles.articleContent}> {/*title author and date*/}
              <h1 className={styles.articleTitle}>{previewData.title}</h1> 
              <h2 className={styles.articleAuthor}>{previewData.author}</h2>
              <p className="preview-content"> {previewData.content.content}</p>
            </div>
          </div>
        </Link>
)};

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        nodes {
          title
          author
          datetime
          url
          image {
            url
          }
          content {
            content
          }
        }
      }
    }
  `);

  const previews = data.allContentfulArticle.nodes; //array of articles

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === previews.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? previews.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <motion.div className={styles.carouselArticles}
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Preview previewData={previews[currentIndex]}/>
      </motion.div>
      <div className={styles.slideNavigation}>
        <div className={styles.left} onClick={handlePrevious}>
          <svg //left arrow svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className={styles.right} onClick={handleNext}>
          <svg //right arrow svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className={styles.indicator}> {/* dots below slider */}
        {previews.map((_, index) => (
          <div 
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;



