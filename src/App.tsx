import { useRoutes } from "react-router-dom"

import routes from "./routes"
import Header from "./components/Header"
import RenderLoading from "./components/RenderLoading"

const App = () => {
  const router = useRoutes(routes)

  return (
    <>
      <Header />
      {router}
      <RenderLoading page />
    </>
  )
}

export default App
