import routes from "../routes"
import Link from "./Link"

const Header = () => {
  return (
    <header className="bg-slate-900 w-full flex justify-center items-center gap-6 px-6 py-3">
      {routes.map((route) => (
        <Link
          className="link"
          activeClassName="active-link"
          path={route.path}
        >
          {route.name}
        </Link>
      ))}
    </header>
  )
}

export default Header
