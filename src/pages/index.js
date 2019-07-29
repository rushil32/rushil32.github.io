import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import torii from "../images/torii.svg"
import "../styles/base.scss"
import indexStyles from "./index.module.scss"

function renderLink(text, url = "") {
  return (
    <li>
      <a href={url} target="_blank">
        {text}
      </a>
    </li>
  )
}

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className={indexStyles.container}>
      <div className={indexStyles.info}>
        <img src={torii} />
        <h1>Rushil Saraogi</h1>
        <p>Frontend Software Engineer, UI Designer</p>
        <ul className={indexStyles.links}>
          {renderLink("GitHub", "https://github.com/rushil32")}
          {renderLink(
            "LinkedIn",
            "https://www.linkedin.com/in/rushil-saraogi-37184969/"
          )}
          <li>
            <Link to="/page-2/">Blog</Link>
          </li>
          {renderLink("Behance", "https://www.behance.net/rushil")}
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage
