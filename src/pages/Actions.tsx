import { useState } from "react"
import Button from "../components/Button"

const Actions = () => {
  const [actions, setActions] = useState<string[]>([])

  const fetchData = (newActionKey: string) => {
    setActions((prev) => [...prev, newActionKey])
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(newActionKey, data.slice(0, 3)))
      .finally(() => setActions((prev) => prev.filter((key) => key !== newActionKey)))
  }

  return (
    <div className="wrapper">
      <h1>Actions:</h1>
      <div className="flex items-center justify-center gap-3 mt-6">
        <Button isLoading={actions.includes("btn1")} onClick={() => fetchData("btn1")}>
          action 1
        </Button>
        <Button isLoading={actions.includes("btn2")} onClick={() => fetchData("btn2")}>
          action 2
        </Button>
        <Button isLoading={actions.includes("btn3")} onClick={() => fetchData("btn3")}>
          action 3
        </Button>
      </div>
    </div>
  )
}

export default Actions
