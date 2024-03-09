import React from "react";
import { Link, graphql } from "gatsby";
import * as styles from "../styles/contentfulArticle.module.css";
import Layout from "../components/header/layout";
import Footer from "../components/footer/footer.js";
import RadioPlayer from "../components/radio-player/radio-player.js";

const Article = ({ data }) => {
  return (
    <main>
      <Layout></Layout> {/*header and navbar*/}
      <RadioPlayer />
      <div className={styles.articleContain}>
        <h1 className={styles.title}>{data.contentfulArticle.title}</h1>
        <Link
          className={styles.author}
          to={`../authors/${data.contentfulArticle.author}`}
        >
          <h3 className={styles.author}>
            Author: {data.contentfulArticle.author}
          </h3>
        </Link>
        <h3>{data.contentfulArticle.datetime}</h3>
        <img
          className="articleImage"
          src={data.contentfulArticle.image.file.url}
          alt={data.title}
        />
        <p className={styles.articleContent}>
          {data.contentfulArticle.content.content}
        </p>
      </div>
      {/* FOOTER */}
      <footer>
        <Footer></Footer>
      </footer>
    </main>
  );
};

export const query = graphql`
  query pageQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      title
      url
      author
      datetime
      image {
        file {
          url
        }
      }
      content {
        content
      }
    }
  }
`;

export default Article;
