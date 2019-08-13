import React from "react"
import { Link } from "gatsby"
import { useTrail, animated } from "react-spring"
import SEO from "../components/seo"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import githubIcon from "../images/logos/github.svg"
import linkedinIcon from "../images/logos/linkedin.svg"
import THEMES from "../util/themes"
import behanceIcon from "../images/logos/behance.svg"
import speechIcon from "../images/icons/speech.svg"
import ramenIcon from "../images/icons/ramen.svg"
import resume from "./resume.pdf"
import documentIcon from "../images/icons/document.svg"

const LINK_TYPES = {
  internal: "INTERNAL",
  external: "EXTERNAL",
}

const items = [
  {
    text: "GitHub",
    url: "https://github.com/rushil32",
    linkType: LINK_TYPES.external,
    icon: githubIcon,
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/rushil-saraogi-37184969/",
    linkType: LINK_TYPES.external,
    icon: linkedinIcon,
  },
  {
    text: "RamenUI",
    url: "/library",
    linkType: LINK_TYPES.internal,
    icon: ramenIcon,
  },
  {
    text: "Blog",
    url: "/blog",
    linkType: LINK_TYPES.internal,
    icon: speechIcon,
  },
  {
    text: "Behance",
    url: "https://www.behance.net/rushil",
    linkType: LINK_TYPES.external,
    icon: behanceIcon,
  },
  {
    text: "Resume",
    url: resume,
    linkType: LINK_TYPES.external,
    icon: documentIcon,
  },
]

const config = { mass: 5, tension: 2500, friction: 200 }

function renderLink({ icon, text, url, linkType }, index) {
  const linkContent = (
    <div className={`${indexStyles.linkWrapper} link${index + 1}`}>
      <img src={icon} />
      <div className={indexStyles.linkText}>
        <span>{text}</span>
        <i className={`material-icons ${indexStyles.arrow}`}>arrow_forward</i>
      </div>
    </div>
  )

  return linkType === LINK_TYPES.external ? (
    <a href={url} className="no-hover" target="_blank">
      {linkContent}
    </a>
  ) : (
    <Link className="no-hover" to={url}>
      {linkContent}
    </Link>
  )
}

const IndexPage = () => {
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.9)' },
  })

  return (
    <Layout theme={THEMES.image}>
      <SEO title="Home" />
      <div className={indexStyles.container}>
        <div className={indexStyles.info}>
          <h1>Gatsby Blog</h1>
          <div className={indexStyles.subheader}>
            Frontend Software Engineer, UI Designer
          </div>
          <div className={indexStyles.email}>
            <a href="mailto:rushil32@gmail.com" target="_blank">
              rushil32@gmail.com
            </a>
          </div>
        </div>
        <div className={indexStyles.links}>
          {trail.map((style, index) => (
            <animated.div
              key={items[index]}
              style={style}
            >
              {renderLink(items[index], index)}
            </animated.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
