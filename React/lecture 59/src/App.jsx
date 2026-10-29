
// console.log(2);

// import Footer from "./components/Footer";
import NewFooter, { Footer as FooterUpdate } from "./components/Footer"; // named import
import Navbar from "./components/Navbar"; // default import

const user = {
  name: "rishab",
  isLoggedIn: true,
};

const products = [
  {
    title: "nike ka jutta",
    price: $1000
  },
  {
    title: "puma ka jutta",
    price: $800
  },
  {
    title: "woodland ka jutta",
    price: $500
  }
];

function App() {
  // console.log(3);
  return (
    <div>

      <Navbar user = {user}/>
      <products products = {products}>
        <p>Products</p>
        <a href="">go to this link</a>
         </products>
         <Body/>
      <FooterUpdate />

    </div>
  );
}

export default App;
