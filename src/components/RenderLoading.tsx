import { ReactNode, useContext, useEffect, useState } from "react"

import Loading from "../contexts/Loading"

type RenderLoadingProps = {
  keys?: string[]
  page?: boolean
  loadingComponent?: ReactNode
  children?: ReactNode
}

const RenderLoading = (props: RenderLoadingProps) => {
  const loading = useContext(Loading)
  const [loaders, setLoaders] = useState<{ page: boolean; action: boolean }>({
    page: false,
    action: false,
  })

  useEffect(() => {
    if (props.page) {
      setLoaders((prev) => ({
        ...prev,
        page: loading.keys.filter((key) => key.type === "PAGE").length > 0,
      }))
    }

    if (props.keys?.length) {
      let hasKey = false
      loading.keys.forEach((key) => {
        props.keys?.forEach((_key) => {
          if (key.type === "ACTION" && key.name === _key) hasKey = true
        })
      })
      setLoaders((prev) => ({ ...prev, action: hasKey }))
    }
  }, [loading])

  return (
    <>
      <div className={`loading ${loaders.page ? "loading-on" : "loading-off"}`}></div>
      {loaders.action ? props.loadingComponent : props.children}
    </>
  )
}

export default RenderLoading