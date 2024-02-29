import React from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/contentfulArticle.module.css";
import Layout from "../components/header/layout";
import Footer from "../components/footer/footer.js";

const Article = ({ data }) => {
  return (
    <main>
      <Layout></Layout> {/*header and navbar*/}
      <div className={styles.articleContain}>
        <h1 className={styles.title}>{data.contentfulArticle.title}</h1>
        <h2 className={styles.author}>
          Author: {data.contentfulArticle.author}
        </h2>
        <h2>{data.contentfulArticle.datetime}</h2>
        <img src={data.contentfulArticle.image.file.url} alt={data.title} />
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
