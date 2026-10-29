import { useState } from 'react'
import './App.css'
import { Link, Outlet, Route, Routes, useParams } from "react-router"
import NotFoundPage from './components/NotFoundPage'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

const products = [
  {
    id: 1,
    title: "Laptop",
  }, {
    id: 2,
    title: "Mobile",
  }, {
    id: 3,
    title: "Air buds",
  }
]

function Home() {
  return (
    <div>
<h1>Home</h1>
<div>
  {
    products.map((e)=> <section><Link to={`/product-page/${e.id}`}>{e.title}</Link></section>)
  }
</div>
    </div>
  )
}

function ProductPage() {
  const { id } = useParams();

  const data = products.find((p => p.id === Number(id)))

  return (
    <div>
      <h1>Product Page</h1>
      {
        data ? <p>{data.title}</p> : "Product Not Found"
      }
    </div>
  )
}

function AboutUs() {
  return <h1>About Us</h1>

}

function Navbar() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/product-page"}>Product Page</Link>
      <br />
      <Link to={"/about-us"}>About Us</Link>
      <br />
      <Link to={"/login"}>Login</Link>
      <br />
      <a href="/contact-us">Contact us</a>
      <br />
      <Outlet />
    </>

  )
};

// <ul>
//       <li onClick={() => setPage("home")}>Home</li>
//       <li onClick={() => setPage("productPage")}>Product Page</li>
//       <li onClick={() => setPage("aboutUs")}>Aboutus</li>
//     </ul>

//     {page == "home" && <Home />}
//     {page == "productPage" && <ProductPage />}
//     {page == "aboutus" && <AboutUs />}


function App() {
  const [page, setPage] = useState("home")

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='/product-page/:id' element={<ProductPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/contact-us' element={<h1>Contact us page</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
