import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import githubIcon from "../images/logos/github.svg"
import linkedinIcon from "../images/logos/linkedin.svg"
import behanceIcon from "../images/logos/behance.svg"
import speechIcon from "../images/icons/speech.svg"
import ramenIcon from "../images/icons/ramen.svg"
import resume from "./resume.pdf"
import documentIcon from "../images/icons/document.svg"

function renderLink(icon, text, url = "") {
  return (
    <a href={url} className="no-hover" target="_blank">
      <img src={icon} />
      <span>{text}</span>
    </a>
  )
}

function renderInternalLink(icon, text, url = "") {
  return (
    <Link className="no-hover" to={url}>
      <img src={icon} />
      <span>{text}</span>
    </Link>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.container}>
      <div className={indexStyles.info}>
        <h1>Rushil Saraogi</h1>
        <div className={indexStyles.subheader}>
          Frontend Software Engineer, UI Designer
        </div>
        <div className={indexStyles.email}>
          <a href="mailto:rushil32@gmail.com" target="_blank">rushil32@gmail.com</a>
        </div>
      </div>
      <div className={indexStyles.links}>
        {renderLink(githubIcon, "GitHub", "https://github.com/rushil32")}
        {renderLink(
          linkedinIcon,
          "LinkedIn",
          "https://www.linkedin.com/in/rushil-saraogi-37184969/"
        )}
        {renderInternalLink(ramenIcon, "RamenUI", "/library")}
        {renderInternalLink(speechIcon, "Blog", "/blog")}
        {renderLink(behanceIcon, "Behance", "https://www.behance.net/rushil")}
        {renderLink(documentIcon, "Resume", resume)}
      </div>
    </div>
  </Layout>
)

export default IndexPage
