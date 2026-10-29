
import React from 'react'

function ChangeTheme() {

    const {setTheme} = use(ThemeContext)

  return (
    <div>
        <h3>ChnageTheme</h3>
        <select name="" id="" onChange={(e)=>console.log(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    </div>
  )
}

export default ChangeTheme