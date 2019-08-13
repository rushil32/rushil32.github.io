import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./nav.module.scss"

function renderLink(url, text) {
  return (
    <li>
      <Link
        className={`${styles.link} no-hover`}
        to={url}
        activeClassName="active"
      >
        {text}
      </Link>
    </li>
  )
}

const Nav = ({ links, logo }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {renderLink('/', (<span>ME</span>))}
        {renderLink('/blog', (<span>Blog</span>))}
        {renderLink('/library', (<span>Ramen UI</span>))}
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
