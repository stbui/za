import React from "react"
import RehypeReact from "rehype-react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { PlaygroundEditor, PlaygroundPreview } from "za-playground"
import elevation from "za-elevation"
import Switch from "za-switch"
import checkbox from "za-checkbox"
import alert from "za-alert"
import avatar from "za-avatar"
import Heading from "../components/Heading"
import Anchor from "../components/Anchor"
import Paragraph from "../components/Paragraph"
import List from "../components/List"
import SEO from "../components/seo"

function getChildrenCode(props: { children?: React.ReactNode }) {
  const children = React.Children.toArray(props.children)
  const [first] = children
  if (typeof first === "object" && first !== null && "type" in first) {
    return first.type === "code" ? first : null
  }
  return null
}

const { Compiler: renderAst } = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Anchor,
    p: Paragraph,
    ul: List,
    h1: props => <Heading as="h1" {...props} />,
    h2: props => <Heading as="h2" {...props} />,
    h3: props => <Heading as="h3" {...props} />,
    h4: props => <Heading as="h4" {...props} />,
    h5: props => <Heading as="h5" {...props} />,
    h6: props => <Heading as="h6" {...props} />,
    pre: props => {
      const codeElement = getChildrenCode(props)
      if (codeElement) {
        const { static: isStatic, maxHeight, className } = codeElement.props
        let [, mode] = className.match(/language-(.+)/) || ([] as any[])
        const modeMap = {
          html: "htmlmixed",
          js: "javascript",
        }

        if (mode in modeMap) {
          mode = modeMap[mode as keyof typeof modeMap]
        }

        const isDynamic =
          !isStatic && ["js", "jsx", "ts", "tsx"].indexOf(mode) !== -1
        const [code] = codeElement.props.children

        if (isDynamic) {
          return (
            <div>
              <PlaygroundPreview
                code={code}
                modules={{
                  "styled-components": styled,
                  "za-elevation": elevation,
                  "za-switch": Switch,
                  "za-checkbox": checkbox,
                  "za-alert": alert,
                  "za-avatar": avatar,
                }}
              />
              <PlaygroundEditor
                readOnly
                mode={mode}
                maxHeight={maxHeight}
                code={code}
              />
            </div>
          )
        }

        return (
          <PlaygroundEditor
            readOnly
            mode={mode}
            maxHeight={maxHeight}
            code={code}
          />
        )
      }

      return <pre {...props} />
    },
  },
})

export default function Docs({ data, pageContext }) {
  const {
    markdownRemark: { title, htmlAst, excerpt },
  } = data
  const { nextPagePath, prevPagePath } = pageContext

  return (
    <>
      <SEO title={title} />
      {renderAst(htmlAst)}
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      title
      htmlAst
      excerpt
      frontmatter {
        path
      }
    }
  }
`
