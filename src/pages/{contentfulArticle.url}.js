import React from 'react';
import { graphql } from 'gatsby';
import "../styles/contentfulArticle.css"
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"

const Article = ({ data }) => {
  // console.log(data.contentfulArticle.content.raw);
  return (
    <main>
      <Layout></Layout> {/*header and navbar*/}
      <div class="article-contain">
          <h1 class="title">{data.contentfulArticle.title}</h1>
          <h2>{data.contentfulArticle.author}</h2>
          <h2 class="date">{data.contentfulArticle.datetime}</h2>
        <img
          src={data.contentfulArticle.image.file.url}
          alt={data.title}
        />
        <p class="article-content">{data.contentfulArticle.content.content}</p>
      </div>
      {/* FOOTER */}
      <footer>
          <Footer>
          </Footer>
      </footer>
    </main>
  );
};

export const query = graphql`
  query pageQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      title
      author
      datetime
      image {
        file {
          url
        }
      }
      content{
        content
      }
    }
  }
`;

export default Article;
