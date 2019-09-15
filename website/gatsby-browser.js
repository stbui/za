/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "whatwg-fetch"
import React from "react"
import Provider from "./src/components/Provider"
import CoreLayout from "./src/components/layout"

import "codemirror/lib/codemirror.css"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

export const wrapPageElement = ({ element, props }) => {
  return <CoreLayout {...props}>{element}</CoreLayout>
}
