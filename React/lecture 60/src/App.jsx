
import { useState } from "react";
import Counter from "./components/Counter"
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {

  // let value = 0
  const [value, setvalue] = useState(0)
  function printCountValue(val) {
    // console.log(val);
    setvalue(val)
  }

  return (
    <div>
      {/* <Navbar count={value} />
      <Counter printCountValue={printCountValue} /> */}
      <Todo />
    </div>
  )
}

export default App
