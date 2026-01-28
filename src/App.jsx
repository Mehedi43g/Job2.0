import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Layout from './layout/Layout'
import Deshboard from './pages/Deshboard'
let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout/>} >
    <Route index element={<Deshboard/>}/>    
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
