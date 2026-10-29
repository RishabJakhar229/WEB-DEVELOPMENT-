import { use, useContext } from "react"
import { UserContext } from "./main"
import Navbar from "./component/Navbar";
import ChangeTheme from "./component/ChangeTheme";

function GrandChild() {
  // const value = useContext(UserContext)
  //OR //
  const value = use(UserContext)
  console.log(value);
  return (
    <div style={{ backgroundColor: "blue", padding: "20px" }}>
      <h1>Grand Child - {value}</h1>
    </div>
  )
}

function Child() {
  return (
    <div style={{ backgroundColor: "purple", padding: "20px" }}>
      <h1>Child</h1>
      <GrandChild />
      <Navbar />
    </div>
  )
}

function Parent() {
  return (
    <div style={{ backgroundColor: "brown", padding: "20px" }}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function App() {

  return (
    <div >
      <Navbar />
      <ChangeTheme />
    </div>
  )
}

export default App
