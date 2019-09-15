import React from "react"
import styled from "styled-components"

const List = styled.ul`
  line-height: 1.5;
  li {
    margin-bottom: 0.5em;
  }
  #props ~ &,
  #props ~ details > & {
    & > li {
      li {
        margin: 0;
      }
      strong ~ code {
        color: indianred;
      }
      margin-bottom: 1.5em;
      p {
        margin: 0.5em 0 0;
      }
    }
  }
`

export default List
