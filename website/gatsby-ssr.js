/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from 'styled-components'

import Provider from "./src/components/Provider"
import CoreLayout from "./src/components/layout"

const sheet = new ServerStyleSheet()


export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const html = renderToString(sheet.collectStyles(bodyComponent))
  replaceBodyHTMLString(html)
}

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

export const wrapPageElement = ({ element, props }) => {
  return <CoreLayout {...props}>{element}</CoreLayout>
}
