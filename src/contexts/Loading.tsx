import { createContext, ReactNode, useState } from "react"

import KeyTypes from "../types/key.types"

type LoadingContextTypes = {
  keys: KeyTypes[]
  addKey: (name: KeyTypes["name"], type?: KeyTypes["type"]) => void
  removeKey: (name?: KeyTypes["name"]) => void
}

const LoadingContext = createContext<LoadingContextTypes>({} as LoadingContextTypes)

type LoadingContextProviderProps = {
  children: ReactNode
}

export const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {
  const [keys, setKeys] = useState<KeyTypes[]>([{ name: "APP", type: "PAGE" }])

  const addKey = (name: KeyTypes["name"], type?: KeyTypes["type"]) => {
    setKeys((prev) => [...prev, { name, type: type || name.includes("/") ? "PAGE" : "ACTION" }])
  }
  const removeKey = (name?: KeyTypes["name"]) => {
    if (name) setKeys((prev) => prev.filter((key) => key.name !== name))
    else setKeys([])
  }

  return (
    <LoadingContext.Provider value={{ keys, addKey, removeKey }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext
