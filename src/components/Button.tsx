import { ReactNode, useContext, useState, useEffect } from "react"
import { PulseLoader } from "react-spinners"
import { v4 as uuid } from "uuid"

import Loading from "../contexts/Loading"
import RenderLoading from "./RenderLoading"

type ButtonProps = {
  className?: string
  clickHandler: (
    cancelLoading: () => void,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  children: ReactNode
}

const Button = ({ className, clickHandler, children }: ButtonProps) => {
  const loading = useContext(Loading)
  const [key, setKey] = useState<string>("")

  useEffect(() => {
    setKey(uuid())
  }, [])

  const cancelLoading = () => loading.removeKey(key)

  return (
    <button
      className={className}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        loading.addKey(key)
        clickHandler(cancelLoading, event)
      }}
      type={"submit"}
    >
      <RenderLoading
        keys={[key]}
        loadingComponent={
          <div>
            <PulseLoader color="black" size={6} />
          </div>
        }
      >
        {children}
      </RenderLoading>
    </button>
  )
}

export default Button
