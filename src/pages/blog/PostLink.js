import React from "react"
import { Link } from "gatsby"
import Label from "../../components/label"
import styles from "./styles/post-link.module.scss"

const PostLink = ({ post }) => {
  if (!post) return <p>Loading...</p>

  return (
    <Link className={`${styles.link} no-hover`} to={post.frontmatter.path}>
      <div>
        <div
          className={styles.header}
          dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
        ></div>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
      <div className={styles.postInfo}>
        <div className={styles.date}>{post.frontmatter.date}</div>
        <Label icon="local_offer" text={post.frontmatter.category} />
      </div>
    </Link>
  )
}

export default PostLink
