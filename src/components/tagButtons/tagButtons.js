import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as styles from "./tagButtons.module.css";

const TagButtons = () => {
  // Query data from GraphQL
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        nodes {
          metadata {
            tags {
              id
              name
            }
          }
        }
      }
    }
  `);

  // Extract tag data from GraphQL query result
  const articles = data.allContentfulArticle.nodes;
  const allTags = articles.flatMap((article) =>
    article.metadata.tags.map((tag) => tag.name)
  );

  // Create an array containing each distinct tag
  const distinctTags = Array.from(new Set(allTags));

  return (
    <div className={styles.container}>
      <h2> Filter by tags: </h2>
      {distinctTags.map((tag, index) => (
        <Link
          key={index}
          to={`/tags/${tag}`}
          className={styles.tag}
          activeClassName={styles.active}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagButtons;
