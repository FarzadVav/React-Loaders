import { PropsWithChildren, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useRecoilState } from "recoil"

import pageLoadingAtom from "../atoms/pageLoading.atom"

const PageLoading = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useRecoilState(pageLoadingAtom)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [location.pathname])

  return (
    <>
      {children}
      <div className={`loading ${isLoading ? "loading-on" : "loading-off"}`} />
    </>
  )
}

export default PageLoading
