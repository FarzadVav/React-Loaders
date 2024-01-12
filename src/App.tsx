import { useRoutes } from "react-router-dom"

import routes from "./routes"
import Header from "./components/Header"
import RenderLoading from "./components/RenderLoading"
import useAppLoading from "./hooks/useApploading"

const App = () => {
  const router = useRoutes(routes)

  useAppLoading((cl) => {
    fetch("https://fakestoreapi.com/products")
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => cl())
  })

  return (
    <>
      <Header />
      {router}
      <RenderLoading page />
    </>
  )
}

export default App
