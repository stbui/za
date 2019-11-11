import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Anchor from "./Anchor"

const StyledHeader = styled.header`
  position: fixed;
  top: -32px;
  left: 0;
  width: 100%;
  z-index: 910;
  height: calc(var(--header-height) + 32px);
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 32px 56px 0;
  will-change: background, transform;
  transition: transform 250ms ease-in-out;
  box-shadow: 0 1px 2px rgba(33, 33, 33, 0.15000000000000002);
`
const StyledBrand = styled(Link)`
  font-size: 22px;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledBrand to="#">{siteTitle}</StyledBrand>
    <div style={{ flex: 1 }}></div>
    <Anchor to="/guides">组件规范</Anchor>
    <Anchor to="/BaseComponents">基础组件</Anchor>
    <Anchor to="/BizComponents">业务组件</Anchor>
    <Anchor to="/standard">中台组件</Anchor>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
