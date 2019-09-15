import React, { ReactNode, createContext } from "react"

const SystemProvider = createContext({})

function Provider(props: { children: ReactNode }) {
  return (
    <SystemProvider.Provider value={1}>
      {props.children}
    </SystemProvider.Provider>
  )
}

export default Provider
