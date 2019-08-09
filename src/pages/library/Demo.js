import React from "react"
import ReactTooltip from "react-tooltip"
import styles from "./styles/demo.module.scss"

const Demo = ({ children, title, toggleModal }) => {
  return (
    <div className={styles.demo}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <i
          className="material-icons"
          data-tip="Documentation"
          onClick={() => toggleModal(title)}
        >
          notes
        </i>
      </div>
      <div className={styles.container}>{children}</div>
      <ReactTooltip />
    </div>
  )
}

export default Demo
