
let colors = ["red", "green", "pink", "yellow"]

let user = {
  name: "rishab",
  isOnline: true
}

function printName() {
  console.log(user.name);
}

function App() {
  return (
    <>
      <div>Hello</div>
      <div>Hii</div>
      <p>{5 + 6}</p>
      <p>5+9</p>
      <ul>
        {
          colors.map((c) => {
            return <li>{c}</li>
          })}
      </ul>
      <p>{user.isOnline ? `${user.name} is online` : `${user.name} is not online`}</p>

      <button className="" onClick={printName}>Click on Me</button>

      <img src="" alt="" />

      <br />
    </>
  );
}

export default App;
