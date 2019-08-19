import React, { useState, useRef } from "react"
import Controls from "./Controls"
import Slide from "./Slide"
import Tag from "../tag"
import styles from "./styles/slide-show.module.scss"

const isClient = typeof window !== "undefined"

function scroll(ele, left) {
  ele.scroll({
    left,
    behavior: "smooth",
  })
}

const SlideShow = ({ slides = [], handleClose }) => {
  const container = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const viewportWidth = isClient ? window.outerWidth : 0

  const toggleLeft = () => setCurrentSlide(Math.max(0, currentSlide - 1))
  const toggleRight = () =>
    setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))

  if (container.current) {
    scroll(container.current, viewportWidth * currentSlide)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.closeButton} onClick={handleClose}>
        <i className="material-icons">close</i>
      </div>
      <div className={styles.indicator}>
        <Tag className={currentSlide === slides.length - 1 ? "danger" : ""}>
          {currentSlide + 1} / {slides.length}
        </Tag>
      </div>
      <div className={styles.container} ref={container}>
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
      </div>
      <Controls
        toggleLeft={toggleLeft}
        toggleRight={toggleRight}
        close={handleClose}
      />
    </div>
  )
}

export default SlideShow
