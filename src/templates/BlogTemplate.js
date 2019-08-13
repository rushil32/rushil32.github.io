import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Banner from "../components/banner"
import styles from "./styles/BlogTemplate.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter);
  return (
    <Layout theme="dark">
      <div className="blog-post-container">
        <div className="blog-post">
          <div className={styles.header}>
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.date}>{frontmatter.date}</p>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`
