
import React, { memo } from 'react'

// function ChildComponent() {
//     console.log("child component re render");
//   return (
//     <div>ChildComponent</div>
//   )
// }

// export default ChildComponent

// React.useState

const ChildComponent = memo(({ printHello }) => {
   console.log(" child component re-render ");
   return (
      <div>ChildComponent 
         <br />
         <button onClick={printHello}>print hello in console</button>
      </div>
   );
})

export default ChildComponent
