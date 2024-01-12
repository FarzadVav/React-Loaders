import useLoadingEffect from "../hooks/useLoadingEffect"

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

  return <div>Actions</div>
}

export default Actions
