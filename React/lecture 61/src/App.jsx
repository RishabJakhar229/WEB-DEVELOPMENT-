
import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>

  );
}

function App() {
  const [changeTag, setChangeTag] = useState(false)

  return (
    <div>

      {/* <h2>hello</h2>
      <h3>hiii</h3> */}

      // Rule 1//
      {/* {
        changeTag ? (
          <div>
            <p>Div Tag</p>
            <Counter />
          </div>
        ) : (
          <section>
            <p>Section Tag</p>
            <Counter />
          </section>
        )} */}

// Rule 2//
      {/* <div className='{changeTag ? "active" : "inactive"}'>
        <Counter />
      </div> */}

// Rule 3//
      {/* {changeTag ? <counter key={1} /> : <counter key={2} />}  // state will not reset or the way to reset the state is key
      {/* {changeTag ? <counter /> : <h1>Mai huu</h1>} */}  // state will reset

      {/* <button onClick={() => setChangeTag((prev) => !prev)}>Change Tag</button> */}
      
      <key />

    </div>
  )
}

// console.log(<h1 id='1'><p className='red'>hello</p> <p>hiii</p></h1>); 




export default App
