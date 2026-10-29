
// console.log(5); 

function Navbar({user = {isLoggedIn : false , name : "Anonymus"}}){
  console.log(user);
  const {isLoggedIn , name} = user;
      // console.log(4);
  return(
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About Us</li>
      {/* conditional rendering */}
      <li>{isLoggedIn ? name : "Login"}</li>
    </ul>
  );
}

function random(val = {}){}
export default Navbar;
