import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.tsx"
import "./index.scss"
import { LoadingContextProvider } from "./contexts/Loading.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </BrowserRouter>
)
