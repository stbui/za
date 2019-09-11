/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Navigation from "./Navigation"
import "./layout.css"

const StyledAside = styled.div`
  position: fixed;
  background: #fff;
  width: 240px;
  z-index: 900;
  top: var(--header-height, 60px);
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: calc(100vh - var(--header-height, 60px));
  padding-bottom: 100px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledMain = styled.main`
  margin: 72px 232px 72px 262px;
  padding: 8px;
  box-sizing: border-box;
  max-width: 946px;
  margin-right: auto;
  margin-left: auto;
`

const StyledFooter = styled.footer`
  text-align: center;
  color: #6f6f6f;
  padding: 3rem 1rem;
`

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
      <StyledAside>
        <Navigation />
      </StyledAside>
      <StyledMain>{children}</StyledMain>

      <div style={{ marginTop: 100 }}>
        <StyledFooter>
          © {new Date().getFullYear()}, Built with
          <a href="#">Stbui</a>
        </StyledFooter>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
