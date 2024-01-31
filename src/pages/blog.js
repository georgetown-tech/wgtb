import * as React from 'react'
import Layout from "../components/header/layout"
import Footer from "../components/footer/footer.js"
import RadioPlayer from '../components/radio-player/radio-player.js';
import { graphql, Link } from 'gatsby';
import "../styles/blog.css"

const Article = ({ articles }) => {
  return (
    <main>
      {articles.map((article) => (
        <Link to={`/${article.url}`}>
          <div class="article-container" key={article.id}>
            <img
              src={article.image.url}
              alt={article.title}
              style={{ width: 200, height: 'auto' }}
            />
            <div class="article-info"> {/*title author and date*/}
              <h1 class="title">{article.title}</h1> 
              <h2 class="author">{article.author}</h2>
              <h2 class="date">{article.datetime}</h2>
            </div>
            <p class="article-content"> {article.content.content}</p>
          </div>
        </Link>
      ))
      }
    </main>
)};

const Blog = ({data}) => {
  const articles = data.allContentfulArticle.nodes;
  return(
      <container>
        <Layout pageTitle="The Rotation"/>
        <RadioPlayer/>
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

// Note: useStaticQuery can be exported and reused around site
export const useStaticQuery = graphql`
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

export default Blog