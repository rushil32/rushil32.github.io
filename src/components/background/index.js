import React, { useState } from "react"
import styles from "./styles/background.module.scss"

const UNSPLASH_RANDOM_OVERHEAD_IMAGE = "https://source.unsplash.com/collection/1668452/1600x900"

async function getBackground(setUrl) {
  let res = await fetch(UNSPLASH_RANDOM_OVERHEAD_IMAGE)
  setUrl(res.url);
}

const Background = () => {
  const [url, setUrl] = useState("");
  getBackground(setUrl)

  const backgroundStyle = {
    backgroundImage:
      "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(" +
      url +
      ")",
    backgroundSize: "cover",
  }

  return (
    <div className={styles.background} style={backgroundStyle}>
      <div className={styles.credit}>
        Image from{" "}
        <a target="_blank" href="#">
          Unsplash
        </a>
      </div>
    </div>
  )
}

export default Background
