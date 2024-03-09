import * as React from "react";
import Layout from "../components/header/layout";
import Footer from "../components/footer/footer.js";
import RadioPlayer from "../components/radio-player/radio-player.js";
import { Link } from "gatsby";
import * as styles from "../styles/authors.module.css";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";

const authorPage = ({ pageContext }) => {
  const { authorArticles, authorProfile } = pageContext;

  return (
    <div>
      <Layout />
      <RadioPlayer />
      {authorProfile && (
        <div className={styles.authorProfile}>
          <img
            className={styles.authorPhoto}
            src={authorProfile.photo.url}
            alt={authorProfile.name}
          />
          <h2>{authorProfile.name}</h2>
          <p className={styles.authorBio}>{authorProfile.bio.bio}</p>
        </div>
      )}

      {authorArticles &&
        authorArticles.length > 0 &&
        authorArticles.map((article) => (
          <Link className={styles.articleLink} to={`/${article.url}`}>
            <div className={styles.articleContainer} key={article.id}>
              <div className={styles.articleImageContainer}>
                <img
                  className={styles.articleImage}
                  src={article.image.url}
                  alt={article.title}
                />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleInfo}>
                  {" "}
                  {/*title author and date*/}
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <h3>{article.author}</h3>
                  <h3>{article.datetime}</h3>
                </div>
                <p className={styles.articlePreview}>
                  {" "}
                  {article.preview.preview}
                </p>
              </div>
            </div>
          </Link>
        ))}
      <Footer />
    </div>
  );
};

export default authorPage;
