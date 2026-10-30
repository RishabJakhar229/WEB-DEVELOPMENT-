
import { Route, Routes } from 'react-router'
import { AuthDashboard } from './component/Dashboard'
import { AuthProfile } from './component/Profile'
import Navbar from './component/Navbar'

function App() {
  let user = {
    name : "rishab",
    role : "learner"
  }
  return (
    <div>
      {/* <Dashboard/> */}
      <Navbar />
      {/* <AuthDashboard />  */}

      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/dashboard' element={<AuthDashboard />} />
        <Route path='/profile' element={<AuthProfile {...user}/>} />
      </Routes>
    </div>
  )
}

export default App