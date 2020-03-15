/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import GlobalStyle  from '../styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <GlobalStyle/>
        <main>{children}</main>

  <Footer/>
      </div>
    </>
  )
}


export default Layout
