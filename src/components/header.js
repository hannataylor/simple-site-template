import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar container" id="top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-hidden-mobile">
        <Link to="/#top" className="link navbar-item navbar-logo">{ siteTitle }</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-brand is-hidden-tablet">
          <Link to="/#top" className="link navbar-item">HT</Link>
        </div>
        <Link to="/about" className="link navbar-item">About</Link>
        <Link to="/#section1" className="link navbar-item">1</Link>
        <Link to="/#section2" className="link navbar-item">2</Link>
        <Link to="/#section3" className="link navbar-item">3</Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
