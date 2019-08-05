import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import githubIcon from "../images/logos/github.svg"
import linkedinIcon from "../images/logos/linkedin.svg"
import behanceIcon from "../images/logos/behance.svg"
import resume from "./resume.pdf"

function renderLink(icon, url = "") {
  return (
    <a href={url} className="no-hover" target="_blank">
      <img src={icon} />
    </a>
  )
}

function renderInternalLink(text, url = "") {
  return (
    <Link className="no-hover" to={url}>
      {text[0]}
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
      </div>
      <div className={indexStyles.links}>
        {renderLink(githubIcon, "https://github.com/rushil32")}
        {renderLink(
          linkedinIcon,
          "https://www.linkedin.com/in/rushil-saraogi-37184969/"
        )}
        {renderInternalLink("Library", "/library")}
        {renderInternalLink("Blog", "/blog")}
        {renderLink(behanceIcon, "https://www.behance.net/rushil")}
        {renderLink(behanceIcon, resume)}
      </div>
    </div>
  </Layout>
)

export default IndexPage
