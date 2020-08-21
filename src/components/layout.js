/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: "column"
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
          <main style={{flexGrow: 1}}>{children}</main>
        </div>        
        <footer></footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
