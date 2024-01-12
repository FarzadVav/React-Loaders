import useLoadingEffect from "../hooks/useLoadingEffect"
import Button from "../components/Button"

const Actions = () => {
  useLoadingEffect((cl) => {
    fetch("https://fakestoreapi.com/products")
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => cl())
  })

  const submitHandler = (cl: Function) => {
    fetch("https://fakestoreapi.com/products")
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => cl())
  }

  return (
    <div className="wrapper">
      <h1>Actions</h1>
      {/* Buttons */}
      <div className="flex items-center gap-3 mt-6">
        <Button className="button" clickHandler={(cl) => submitHandler(cl)}>
          SUBMIT 1
        </Button>
        <Button className="button" clickHandler={(cl) => submitHandler(cl)}>
          SUBMIT 2
        </Button>
        <Button className="button" clickHandler={(cl) => submitHandler(cl)}>
          SUBMIT 3
        </Button>
      </div>
      {/* Buttons */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magni ipsam ut, enim dolor
        harum quo molestiae recusandae veritatis consequuntur et vero sed aperiam quidem amet? Animi
        laudantium sequi corrupti ipsa veritatis. Aut, laudantium temporibus. Velit rem iure
        possimus quaerat vel amet fugit nulla, ipsa repellendus quas hic quo nostrum?
      </p>
    </div>
  )
}

export default Actions
