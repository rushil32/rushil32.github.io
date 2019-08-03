import React from "react"
import { Link } from "gatsby"
import styles from './styles/post-link.module.scss';

const PostLink = ({ post }) => {
  if (!post) return (
    <p>Loading...</p>
  )

  return (
    <Link className={`${styles.link} no-hover`} to={post.frontmatter.path}>
      <div>
        <img src={post.frontmatter.image.childImageSharp.fluid.src} />
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default PostLink
