
import React, { useState } from 'react'

function Counter({printCountValue}) {

    // let count = 0;  // normal variable

    // console.log("re-render");
    // console.log({count , value});

    //    const result =  useState(0)
    //    const value = result[0]
    //    const setValue = result[1]
    // OR //
    let [value, setValue] = useState(0) // it is arrey destructuring
    // let [theme, setTheme] = useState("dark") 
    // let [user, setUser] = useState({}) 


    function increment() {
        // count++;
        // setValue(value + 1)
        // setValue(value + 1)
        // setValue(value + 1)

        // setValue(value++) // post increment
        // setValue(value++)
        // setValue(value++)

        // setValue(++value) // pre increment
        // setValue(++value)
        // setValue(++value)

        setValue((prev)=> prev+1)
            printCountValue(++value)
        // setValue((prev)=> prev+1)
        // setValue((prev)=> prev+1)
        // printCountValue(value)
    }

    function decrement() {
        // count--;
        // setValue(value--)
        setValue((prev)=> prev -1)
        printCountValue(-- value)
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <p>{value}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter