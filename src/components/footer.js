import React from "react"

const Footer = () => (
    <footer className="footer">
        <div className="social-icons">
            <a className="icon" href="https://github.com/hannataylor" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a className="icon" href="https://www.linkedin.com/in/hannataylor" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="copyright">
            <p>Copyright © {new Date().getFullYear()}</p>
            <p>Designed by Hanna Taylor</p>
        </div>
    </footer>
  )

export default Footer