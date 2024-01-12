import { ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"

import Loading from "../contexts/Loading"

type LinkProps = {
  className?: string
  activeClassName?: string
  path: string
  conditionForActive?: boolean
  conditionForAlwaysActive?: boolean
  clickHandler?: Function
  children: ReactNode
}

const Link = ({
  path,
  activeClassName,
  conditionForActive = true,
  conditionForAlwaysActive = false,
  className,
  clickHandler = () => {},
  children,
}: LinkProps) => {
  const loading = useContext(Loading)
  const navigate = useNavigate()

  const _clickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    clickHandler()
    if (path !== location.pathname) {
      loading.addKey(path)
      navigate(path)
      window.scrollTo(0, 0)
    }
  }

  return (
    <a
      className={
        (path === location.pathname && activeClassName && conditionForActive) ||
        conditionForAlwaysActive
          ? activeClassName
          : className
      }
      onClick={_clickHandler}
    >
      {children}
    </a>
  )
}

export default Link
