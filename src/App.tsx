import { useRoutes } from "react-router-dom"

import routes from "./routes"
import Header from "./components/Header"

const App = () => {
  const router = useRoutes(routes)

  return (
    <>
      <Header />
      {router}
    </>
  )
}

export default App
