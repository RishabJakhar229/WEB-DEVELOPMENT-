import { useEffect, useState } from "react"
import axios from "axios";

function Timer() {

  useEffect(() => {
  const id =  setInterval(() => {
      console.log("Timer");
    }, 2000)

    return () => {
      console.log("timer cleanup");
      clearInterval(id)
    }
  }, [])
  return <div>
    <h2>Timer Component</h2>
  </div>
}

function App({ title = "App Component" }) {
  const [productCount, setProductCount] = useState(0)
  const [product, setProduct] = useState([])
  const [name, setName] = useState("")
  const [showTimer, setShowTimer] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // console.log("1st");

  useEffect(() => {


    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/products")
      // let data = await response.json()

let {data} = await axios.get("https://dummyjson.com/products")


      // console.log(data);
      // setProductCount(data.total);
      setProduct(data.products);
      setIsLoading(false)
    }
    getProducts()

    // console.log("2nd");
    console.log("hii");

    return function () {
      console.log("cleanup function");
    }
  }, [name])

  // console.log("3rd");

  // if(isLoading){
  //   return <div class="loader"></div>
  // }

  return (
    <div>

      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>Toggle Timer Component</button>
      <br />
      Product - {productCount} , {title}
      <br />
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <ul>
        { isLoading ? (<div className="loader"></div>) : (
          product.map((p) => <li key={p.id}>{p.title}</li>)
        )}
      </ul>
    </div>
  )
}

export default App
