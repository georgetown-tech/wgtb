import React from "react";
import Slider from "react-slick";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const Preview = ({ previewData }) => {
  return (
    <Link to={`/${previewData.url}`} className={styles.articleLink}>
      <div className={styles.articleContainer} key={previewData.id}>
        <img
          className={styles.articleImage}
          src={previewData.image.url}
          alt={previewData.title}
        />
        <div className={styles.articleContent}>
          {" "}
          {/*title author and date*/}
          <h1 className={styles.articleTitle}>{previewData.title}</h1>
          <h2 className={styles.articleAuthor}>{previewData.author}</h2>
          <p className="preview-content"> {previewData.preview.preview}</p>
        </div>
      </div>
    </Link>
  );
};

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: false, //slide height fits article
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        nodes {
          title
          id
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

  return (
    <Slider {...settings}>
      {previews.map((article) => (
        <Preview key={article.id} previewData={article} />
      ))}
    </Slider>
  );
}

export default Carousel;
