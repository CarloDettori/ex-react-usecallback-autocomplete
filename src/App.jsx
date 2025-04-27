import { useState, useEffect } from "react"
import { useCallback } from "react"


function App() {
  const [products, setProducts] = useState([])
  const [inputValue, SetInputValue] = useState("")

  const TentProduct = ({ name }) => {
    return <p className="py-1">{name}</p>
  }


  /*const productCard = ({ id, name, brand, rating, image, description, color, price, connectivity, wireless }) => {
    return (
      <div className="card mb-3">
        <div div className="row g-0" >

          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="productIMG" />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h1>{name}</h1>
              <h2>{brand}</h2>
              <p>{description}</p>
              <p>{color}</p>
              <p>{price}</p>
              <p>{connectivity}</p>
              <p>{wireless}</p>
            </div>
          </div>

        </div >
      </div >
    )
  }
    */

  function debounce(callback, delay) {
    let timer
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value)
      }, delay);
    };
  }

  async function getData(query) {
    const data = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`)
    const useData = await data.json()
    setProducts(useData)
    console.log("tentativo")
  }

  const debouncefetch = useCallback(debounce(getData, 300), [])

  function handleChange(event) {
    SetInputValue(event.target.value)
  }

  useEffect(() => {
    debouncefetch(inputValue)
  }, [inputValue])
  //console.log(products)

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="sedia" />
        <div id="tent">
          {inputValue.trim() ? products.map((product) => <TentProduct key={product.id} name={product.name} />) : ""}
        </div>
      </div>
      <div>
        {/*
          products.map((product) => {
            return <Tent
              key={product.id}
              name={product.name}
              brand={product.brand}
              rating={product.rating}
              image={product.image}
              description={product.description}
              color={product.color}
              price={product.price}
              connettivity={product.connectivity}
              wireles={product.wireless}
            />
          })
        */}
      </div>
    </>
  )
}

export default App
