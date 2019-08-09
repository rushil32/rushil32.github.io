import React from "react"
import cx from "classnames"
import styles from "./styles/Banner.module.scss"

const Banner = ({ children, animated = "true", theme = "default" }) => {
  const contentClasses = cx({
    [styles.content]: true,
    animated,
    fadeInUp: animated,
  })

  return (
    <div className={`${styles.banner} ${styles[theme]}`}>
      <div className={contentClasses}>{children}</div>
    </div>
  )
}

export default Banner
