import React, { useEffect } from "react"
import styles from "./styles/controls.module.scss"

const Controls = ({ toggleRight, toggleLeft, close }) => {
  const handleKeypress = e => {
    switch (e.keyCode) {
      case 39:
        toggleRight();
        break;
      case 37:
        toggleLeft();
        break;
      case 27:
        close();
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeypress);
    }
  })

  return (
    <div className={styles.controls}>
      <i className="material-icons" onClick={toggleLeft}>
        keyboard_arrow_left
      </i>
      <i className="material-icons" onClick={toggleRight}>
        keyboard_arrow_right
      </i>
    </div>
  )
}

export default Controls
