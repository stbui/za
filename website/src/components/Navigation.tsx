import * as React from "react"
import { useStaticQuery, graphql, Link, GatsbyLinkProps } from "gatsby"
import styled from "styled-components"

const Sidebar = styled.div`
  width: 240px;
  display: inline-block;
  vertical-align: top;
  position: fixed;
  overflow: auto;
  height: calc(100% - 65px);
  top: 65px;
  padding-top: 30px;
  padding-bottom: 65px;
  border-right: 1px solid #dfdfdf;
  background: #fff;
`

const Meun = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const MenuGroup = styled.li`
  list-style: none;
`

const MenuItem = styled.div`
  line-height: 40px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 40px;

  ${({ active }: any) =>
    active &&
    `background: #E9E5FC;
  border-right: 2px solid #6a50ee;`}

  a {
    color: #424242;
    text-decoration: none;
    padding-left: 10px;
    outline: none;

    ${({ active }: any) => active && `color: #6a50ee;`}

    &:hover {
      color: #6a50ee;
    }
  }
`

const query = graphql`
  query DocsQuery {
    allDocsYaml {
      nodes {
        section
        paths
      }
    }
    allMarkdownRemark {
      nodes {
        title
        frontmatter {
          path
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <Sidebar>
      <Meun>
        {data.allMarkdownRemark.nodes.map((d, key) => (
          <MenuGroup key={key}>
            <MenuItem>
              <Link to={d.frontmatter.path}>{d.title}</Link>
            </MenuItem>
          </MenuGroup>
        ))}

        <MenuGroup>
          <MenuItem>
            <Link to="/quickStart">快速开始</Link>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>
            <Link to="/project">项目实战</Link>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>
            <Link to="/attention">使用注意</Link>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>
            <Link to="/participation">参与贡献</Link>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>
            <Link to="/changelog">更新日志</Link>
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuItem>
            <Link to="#">组件</Link>
          </MenuItem>
        </MenuGroup>
      </Meun>
    </Sidebar>
  )
}
