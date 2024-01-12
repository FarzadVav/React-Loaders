import useLoadingEffect from "../hooks/useLoadingEffect"

const ExamPage = () => {
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

  return <div>ExamPage</div>
}

export default ExamPage
