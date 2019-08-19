import React from "react"
import styles from "./styles/slide.module.scss"

const Slide = ({ children }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.content}>
        {typeof children === "string" ? (
          <div dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default Slide
