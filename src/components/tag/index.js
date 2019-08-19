import React from "react"
import styles from "./styles/tag.module.scss"

const Tag = ({ children, className = "" }) => {
  return <div className={`${styles.tag} ${className}`}>{children}</div>
}

export default Tag
