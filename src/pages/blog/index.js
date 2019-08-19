import React from "react"
import { useTrail, animated } from "react-spring"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostLink from "./PostLink"
import THEMES from "../../util/themes"
import styles from "./styles/index.module.scss"

const config = { mass: 5, tension: 2000, friction: 200 }

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const trail = useTrail(edges.length, {
    config,
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.95)' },
  })

  return (
    <Layout theme={THEMES.image}>
      <SEO title="Blog" />
      <div className={styles.posts}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <PostLink post={edges[index].node} />
          </animated.div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
