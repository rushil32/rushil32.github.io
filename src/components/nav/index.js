import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./nav.module.scss"

function renderLinks(links) {
  return links.map((link, i) => (
    <li key={i}>
      <Link
        className={`${styles.link} no-hover`}
        to={link.url}
        activeClassName="active"
      >
        {link.text}
      </Link>
    </li>
  ))
}

const Nav = ({ links, logo }) => {
  const mid = Math.floor(links.length / 2)
  const leftLinks = links.slice(0, mid)
  const rightLinks = links.slice(mid)

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {renderLinks(leftLinks)}
        <li>
          <img className={styles.logo} src={logo} />
        </li>
        {renderLinks(rightLinks)}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  links: PropTypes.array.isRequired,
}

Nav.defaultProps = {
  links: [],
}

export default Nav
