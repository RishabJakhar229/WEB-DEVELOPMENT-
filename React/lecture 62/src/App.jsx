import ControlledComponent from "./components/controlledComponent"
import UnControlledComponent from "./components/uncontrolledcomponent"
import UnControlledComponentUseRef from "./components/UnControlledComponentUseRef"


function App() {

  return (
    <div>
      <ControlledComponent />
      <UnControlledComponent />
      <UnControlledComponentUseRef />
    </div>
  )
}

export default App
