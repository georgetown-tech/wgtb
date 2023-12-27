import * as React from 'react'
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"
import { graphql } from 'gatsby';
import "./blog.css"

const Article = ({ articles }) => {
  return (
    <main>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <h2>{article.author}</h2>
          <h2>{article.datetime}</h2>
          <img
            src={article.image.url}
            alt={article.title}
            style={{ width: 300, height: 'auto' }}
          />
          <p>{article.content.content}</p>
        </div>
      ))
      }
    </main>
)};

const Header = ({data}) => {
  const articles = data.allContentfulArticle.nodes;
  return(
      <container>
        <Layout pageTitle="The Rotation"/>
        <div class ="articles">
          <Article articles={articles}/>
        </div>

        {/* FOOTER */}
        <footer>
          <Footer>
          </Footer>
        </footer>
      </container>
  )
};

export const Head = () => <title>Home Page</title>

export const query = graphql`
query {
  allContentfulArticle {
    nodes {
      url
      title
      author
      datetime
      image{
        url
      }
      content {
        content
      }
    }
  }
}
`;

export default Header