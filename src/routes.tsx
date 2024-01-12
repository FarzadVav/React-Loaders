import { lazy, ReactNode, Suspense } from "react"

const Home = lazy(() => import("./pages/Home.tsx"))
const ExamPage = lazy(() => import("./pages/ExamPage.tsx"))
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
    name: "Example",
    path: "/example",
    element: (
      <Suspense>
        <ExamPage />
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
