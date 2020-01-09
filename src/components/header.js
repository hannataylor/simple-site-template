import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-fixed-top" id="top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div className="navbar-brand is-hidden-mobile">
          <Link to="/#top" className="link navbar-item navbar-logo">{ siteTitle }</Link>
        </div>
        <div className="navbar-brand is-hidden-tablet">
            <Link to="/#top" className="link navbar-item"><i class="far fa-hand-peace"></i></Link>
        </div>
        <div className="navbar-end">
            <Link to="/#section1" className="link navbar-item">1</Link>
            <Link to="/#section2" className="link navbar-item">2</Link>
            <Link to="/#section3" className="link navbar-item">3</Link>
            <Link to="/about" className="link navbar-item">About</Link>
          </div>
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
