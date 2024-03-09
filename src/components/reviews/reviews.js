import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as styles from "./reviews.module.css";

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query reviewQuery {
      allContentfulArticle(
        filter: {
          metadata: { tags: { elemMatch: { name: { eq: "reviews" } } } }
        }
        limit: 5
      ) {
        nodes {
          title
          id
          author
          url
          preview {
            preview
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);

  // Check if reviewData or reviewData.allContentfulArticle is undefined
  if (!data || !data.allContentfulArticle) {
    return <h3>Articles not found</h3>; // or display a loading indicator
  }

  const reviewArticles = data.allContentfulArticle.nodes;

  return (
    <div>
      {reviewArticles.map((article) => (
        <Link to={`/${article.url}`} className={styles.review} key={article.id}>
          <img src={article.image.file.url} alt={article.title} />
          <div className={styles.reviewText}>
            <h3>{article.title}</h3>
            <h4>{article.author}</h4>
            <p>{article.preview.preview}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Reviews;
