import { NavLink } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import routes from "../routes"
import pageLoadingAtom from "../atoms/pageLoading.atom"

const Header = () => {
  const setLoading = useSetRecoilState(pageLoadingAtom)

  return (
    <header className="bg-slate-900 w-full flex justify-center items-center gap-6 px-6 py-3">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={(link) => (link.isActive ? "active-link" : "link")}
          to={route.path}
          onClick={() => setLoading(true)}
        >
          {route.name}
        </NavLink>
      ))}
    </header>
  )
}

export default Header
