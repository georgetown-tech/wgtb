import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import { motion, AnimatePresence } from "framer-motion";
import * as styles from './ImageSlider.module.css';

const Preview = ({ previewData }) => {
  return (
        <Link to={`/${previewData.url}`} className={styles.articleLink}>
          <div className={styles.articleContainer} key={previewData.id}>
            <img className={styles.articleImage}
              src={previewData.image.url}
              alt={previewData.title}
            />
            <div className={styles.articleContent}> {/*title author and date*/}
              <h1 className={styles.articleTitle}>{previewData.title}</h1> 
              <h2 className={styles.articleAuthor}>{previewData.author}</h2>
              <p className="preview-content"> {previewData.preview.preview}</p>
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
        url
        image {
          url
        }
        preview {
          preview
        }
      }
    }
  }
  `);

  const previews = data.allContentfulArticle.nodes; //array of articles

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === previews.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? previews.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      y: '0',
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      y: '0',
      opacity: 0,
    },
    visible: {
      x: "0",
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      translateY: 0, // Adjust this property to control the exit direction
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }
    
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div className={styles.carouselArticles}
          key={currentIndex}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate= "visible"
          exit= "exit"
        >
          <Preview previewData={previews[currentIndex]}/>
        </motion.div>
      </AnimatePresence>
      <div className={styles.slideNavigation}>
        <div className={styles.left} onClick={handlePrevious}>
          <svg //left arrow svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className={styles.right} onClick={handleNext}>
          <svg //right arrow svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
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



