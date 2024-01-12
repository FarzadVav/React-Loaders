import { useContext, useEffect } from "react"
import { useRoutes } from "react-router-dom"

import routes from "./routes"
import LoadingContext from "./contexts/Loading"
import Header from "./components/Header"
import RenderLoading from "./components/RenderLoading"

const App = () => {
  const router = useRoutes(routes)
  const loading = useContext(LoadingContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => loading.removeKey())
  }, [])

  return (
    <>
      <Header />
      {router}
      <RenderLoading page />
    </>
  )
}

export default App
