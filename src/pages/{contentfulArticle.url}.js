import React from 'react';
import { graphql } from 'gatsby';

const Article = ({ data }) => {
  // console.log(data.contentfulArticle.content.raw);
  return (
    <main>
      <h1>{data.contentfulArticle.title}</h1>
      <h2>{data.contentfulArticle.author}</h2>
      <h2>{data.contentfulArticle.datetime}</h2>
      <img
        src={data.contentfulArticle.image.file.url}
        alt={data.title}
        style={{ width: 300, height: 'auto' }}
      />
      <p>{data.contentfulArticle.content.content}</p>
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
