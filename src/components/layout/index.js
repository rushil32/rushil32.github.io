/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from '../nav';
import toriiLogo from "../../images/logos/torii-color-2.svg"
import "./layout.css"

const Layout = ({ children }) => {
  const navLinks = [
    {
      text: 'Me',
      url: '/',
    },
    {
      text: 'Library',
      url: '/library',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: 'About',
      url: '/about',
    }
  ]

  return (
    <div>
      <Nav links={navLinks} logo={toriiLogo} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Because 42
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
