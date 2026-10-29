
import { useState } from 'react'

function ControlledComponent() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // OR //
  const [form, setForm] = useState({ name: "Rishab", email: "Rishab@gmail.com", password: "" });

  function signUp(e) {
    e.preventDefault()
    console.log(form);
  }

  function handleInput(e) {
    // let value = e.target.value;
    // let name = e.target.name

    const {value, name} = e.target;
    setForm((prev)=>({...prev , [name] : value}))
  }

  return (
    <div>
      <h1>Form in React (Controlled Component)</h1>

      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : </label>
        <input
        value={form.name}
          type="text"
          name="name"
          id="name"
          onInput={handleInput}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
        value={form.email}
          type="email"
          name="email"
          id="email"
          onInput={handleInput}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          onInput={handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComponent
