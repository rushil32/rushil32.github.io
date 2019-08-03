import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import torii from "../images/logos/torii-color.svg"
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

function renderInternalLink(text, url = "") {
  return (
    <li>
      <Link to={url}>{text}</Link>
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
        <div className={indexStyles.subheader}>Frontend Software Engineer, UI Designer</div>
        <ul className={indexStyles.links}>
          {renderLink("GitHub", "https://github.com/rushil32")}
          {renderLink(
            "LinkedIn",
            "https://www.linkedin.com/in/rushil-saraogi-37184969/"
          )}
          {renderInternalLink("Library", '/library')}
          {renderInternalLink("Blog", '/blog')}
          {renderLink("Behance", "https://www.behance.net/rushil")}
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage
