import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SlideShow from "../components/slide-show"
import { graphql } from "gatsby"
import THEMES from "../util/themes"
import styles from "./styles/BlogTemplate.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const slides = html.split("<p>--split--</p>")
  const firstSlide = (
    <div className="animated fadeInUp">
      <div className={styles.title}>
        <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }}></h1>
        <p className={styles.date}>{frontmatter.date}</p>
      </div>
    </div>
  )

  slides.unshift(firstSlide)

  return (
    <Layout
      theme={THEMES.image}
      showNav={false}
      noWidth={true}
      noPadding={true}
    >
      <SlideShow slides={slides} handleClose={() => navigate("/blog")} />
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
