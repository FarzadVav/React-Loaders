import useLoadingEffect from "../hooks/useLoadingEffect"

const Home = () => {
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

  return <div>Home</div>
}

export default Home
