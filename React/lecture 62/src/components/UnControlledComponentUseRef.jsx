import { useRef } from "react";

function UnControlledComponentUseRef() {
  const nameRef = useRef(null)

  function signUp(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData));
    // console.log(nameRef.current.value);
  let nameTag1 = nameRef.current.focus()
 let nameTag2 = document.querySelector("#name2")
 console.log(nameTag1.value , nameTag2.value);
  }

  console.log("re-render");

  return (
    <div>
      <h1>Form in React (UnControlledComponent - useRef)</h1>

      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : {" "}</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name2"
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UnControlledComponentUseRef
