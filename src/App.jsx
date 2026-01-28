import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Deshboard from './pages/Deshboard'
import Appointments from './pages/Appointments'
import CallLogs from './pages/CallLogs'
import Settings from './pages/Settings'
let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout/>} >
    <Route index element={<Deshboard/>}/>    
    <Route path='appointments' element={<Appointments/>}/>    
    <Route path='calllogs' element={<CallLogs/>}/>    
    <Route path='settings' element={<Settings/>}/>    
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
