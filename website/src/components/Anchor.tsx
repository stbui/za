import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: calc(100% - 5px);
  color: inherit;
  font-weight: 400;
  margin-top: 5px;
  border-bottom: 5px solid transparent;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 0.875em;
  text-decoration: none;
  padding: 0 1em;
  color: #6a50ee;

  &:hover {
    border-color: #6a50ee;
  }
`

export default ({ to, children }) => {
  if(to) {
    return <StyledLink to={to}>{children}</StyledLink>
  }

  return children
}
