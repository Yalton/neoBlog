import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const pageTitle = post.frontmatter.title;
  return (
    <Layout>
      <Seo title={pageTitle} />
      <div className="content_container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/">Go back to the homepage</Link>

    </Layout>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
