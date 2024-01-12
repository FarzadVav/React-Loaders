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

  return (
    <div className="wrapper">
      <h1>Example</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magni ipsam ut, enim dolor
        harum quo molestiae recusandae veritatis consequuntur et vero sed aperiam quidem amet? Animi
        laudantium sequi corrupti ipsa veritatis. Aut, laudantium temporibus. Velit rem iure
        possimus quaerat vel amet fugit nulla, ipsa repellendus quas hic quo nostrum?
      </p>
    </div>
  )
}

export default ExamPage
