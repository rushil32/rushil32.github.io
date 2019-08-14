import React, { useState } from "react"
import styles from "./styles/background.module.scss"

const isClient = typeof window !== "undefined"
const UNSPLASH_COLLECTION =
  "https://unsplash.com/collections/981639/aerialdrone-captures"
const UNSPLASH_SOURCE =
  "https://source.unsplash.com/collection/" +
  getCollectionId(UNSPLASH_COLLECTION) +
  "/1600x900"

function getCollectionId(url) {
  return /collections\/(\w+)\//.exec(url)[1]
}

async function getBackground(setUrl) {
  if (!isClient) return
  let res = await fetch(UNSPLASH_SOURCE)
  setUrl(res.url)
}

const Background = () => {
  const [url, setUrl] = useState("")
  getBackground(setUrl)

  const backgroundStyle = {
    backgroundImage:
      "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(" +
      url +
      ")",
    backgroundSize: "cover",
  }

  return (
    <div className={styles.container}>
      <div className={styles.background} style={backgroundStyle}></div>
      <div className={styles.credit}>
        Images from{" "}
        <a target="_blank" href={UNSPLASH_COLLECTION}>
          Unsplash
        </a>
      </div>
    </div>
  )
}

export default Background
