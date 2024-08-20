import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"

import PageLoading from "./components/PageLoading.tsx"
import App from "./App.tsx"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <BrowserRouter>
    <RecoilRoot>
      <PageLoading>
        <App />
      </PageLoading>
    </RecoilRoot>
  </BrowserRouter>
)
