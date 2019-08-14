import React, { useState } from "react"
import styles from "./styles/background.module.scss"

const UNSPLASH_OVERHEAD_COLLECTION =
  "https://unsplash.com/collections/981639/aerialdrone-captures"
const UNSPLASH_SOURCE =
  "https://source.unsplash.com/collection/" +
  getCollectionId(UNSPLASH_OVERHEAD_COLLECTION) +
  "/1600x900"

function getCollectionId(url) {
  return /collections\/(\w+)\//.exec(url)[1]
}

async function getBackground(setUrl) {
  let res = await fetch(UNSPLASH_SOURCE)
  setUrl(res.url)
}

const Background = () => {
  const [url, setUrl] = useState("")
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
        <a target="_blank" href={UNSPLASH_OVERHEAD_COLLECTION}>
          Unsplash
        </a>
      </div>
    </div>
  )
}

export default Background
