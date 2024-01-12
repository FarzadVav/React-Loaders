import { lazy, ReactNode, Suspense } from "react"

const Home = lazy(() => import("./pages/Home.tsx"))
const ExamPage = lazy(() => import("./pages/ExamPage.tsx"))
const Actions = lazy(() => import("./pages/Actions.tsx"))

type routeTypes = {
  path: string
  element: ReactNode
}[]

const routes: routeTypes = [
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/example",
    element: (
      <Suspense>
        <ExamPage />
      </Suspense>
    ),
  },
  {
    path: "/actions",
    element: (
      <Suspense>
        <Actions />
      </Suspense>
    ),
  },
]

export default routes
