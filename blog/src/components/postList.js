import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import * as styles from "./index.module.css"; // Adjust the path if needed

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);


  const posts = data.allMarkdownRemark.edges;

  return (
    <div className={styles.contentContainer}>
      {posts.map(({ node }) => (
        <div key={node.frontmatter.slug}>
          <h2>
            {node.frontmatter.title}
          </h2>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={node.frontmatter.slug}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
