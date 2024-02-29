import * as React from "react";
import Layout from "../components/header/layout";
import Footer from "../components/footer/footer.js";
import RadioPlayer from "../components/radio-player/radio-player.js";
import TagButtons from "../components/tagButtons/tagButtons.js";
import { Link } from "gatsby";
import * as styles from "../styles/blog.module.css";

const tagPage = ({ pageContext }) => {
  console.log(pageContext);
  const { tagArticles } = pageContext;

  return (
    <div>
      <Layout />
      <RadioPlayer />
      <TagButtons />

      {tagArticles &&
        tagArticles.length > 0 &&
        tagArticles.map((article) => (
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
                  <h1 className={styles.articleTitle}>{article.title}</h1>
                  <h2>{article.author}</h2>
                  <h2>{article.datetime}</h2>
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

export default tagPage;