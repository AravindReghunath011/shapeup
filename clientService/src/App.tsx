
import { Routes,Route } from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
    </Routes>
    </>
  )
}

export default App
