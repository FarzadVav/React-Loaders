import { HTMLAttributes } from "react"
import { PulseLoader } from "react-spinners"

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean
}

const Button = ({ isLoading, className, children, ...props }: ButtonProps) => {
  return (
    <button className="bg-sky-600 py-3 px-7 rounded-md" {...props}>
      {isLoading ? <PulseLoader color="white" size={6} /> : children}
    </button>
  )
}

export default Button
