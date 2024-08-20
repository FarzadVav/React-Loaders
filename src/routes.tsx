import { lazy, ReactNode, Suspense } from "react"

const Home = lazy(() => import("./pages/Home.tsx"))
const Posts = lazy(() => import("./pages/Posts.tsx"))
const Actions = lazy(() => import("./pages/Actions.tsx"))

type routeTypes = {
  name: string
  path: string
  element: ReactNode
}[]

const routes: routeTypes = [
  {
    name: "Home",
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    name: "Posts",
    path: "/posts",
    element: (
      <Suspense>
        <Posts />
      </Suspense>
    ),
  },
  {
    name: "Actions",
    path: "/actions",
    element: (
      <Suspense>
        <Actions />
      </Suspense>
    ),
  },
]

export default routes
