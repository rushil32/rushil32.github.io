import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import styles from "./styles/modal.module.scss"
import Button from "../button"
import { useSpring, animated } from "react-spring"

const Modal = ({
  show = false,
  header,
  icon,
  children,
  submitBtnText,
  onSubmit,
  toggleModal,
}) => {
  const backdropClasses = cx({ show })
  const modalClasses = cx({ show })
  const props = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 150 },
    pointerEvents: show ? "auto" : "none",
    from: { opacity: 0, pointerEvents: "none" },
  })

  return (
    <animated.div style={props}>
      <div key={1} className={`${styles.backdrop} ${backdropClasses}`}>
        <div className={`${styles.modal} ${modalClasses}`}>
          <div className={styles.header}>
            <div className={styles.title}>
              <i className={`material-icons ${styles.icon}`}>{icon}</i>
              <h3>{header}</h3>
            </div>
            <i
              className={`material-icons ${styles.close}`}
              onClick={toggleModal}
            >
              close
            </i>
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <Button onClick={toggleModal} style="secondaryLink">
              Close
            </Button>
            {submitBtnText && (
              <Button onClick={onSubmit} style="primary">
                {submitBtnText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  header: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  submitBtnText: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default Modal
