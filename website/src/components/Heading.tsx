import React from "react"
import styled from "styled-components"

const CustomComponent = ({ tag, ...rest }) =>
  React.createElement(tag, { ...rest })

const Heading = styled(CustomComponent)`
  line-height: 1.5;
  & > .anchor:focus > *,
  &:hover > .anchor > * {
    visibility: visible;
  }
  & > .anchor > * {
    visibility: hidden;
  }
  h1& {
    font-size: 2.5em;
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  h2& {
    font-size: 2em;
    @media (max-width: 768px) {
      font-size: 1.75em;
    }
  }
  h3& {
    font-size: 1.5em;
    @media (max-width: 768px) {
      font-size: 1.25em;
    }
  }
  h4& {
    font-size: 1.25em;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
`

export default ({ as, ...other }) => {
  return <Heading as={as} {...other}></Heading>
}
