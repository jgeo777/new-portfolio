/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main 
            style={{
              flexGrow: 1,
          }}
        >
        {children}
        </main>
        <footer className="footer">
        <div className="footer__socials">
          <a href="https://linkedin.com/in/jordan-george5/"><FaLinkedin /></a>
          <a href="https://github.com/jgeo777"><FaGithub /></a>
          <a href="mailto:jordan.geo777@gmail.com"><FaEnvelope /></a>
        </div>
        <div className="footer__attributions">
          <a href="https://www.vecteezy.com/free-vector/star">Star Vectors by Vecteezy</a>
          © {new Date().getFullYear()}, Built by Jordan George
        </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
