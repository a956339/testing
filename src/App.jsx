import React from 'react'
import Landing from './Components/Landing/Landing'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage/LoginPage'
import Register from './Components/SinUp/Register'
import Home from './Components/Dashboard/Home'
import Navbar from './Components/Navbar/Navbar'
import HomeContent from './Components/SideBarContent/HomeContent/HomeContent'
import Setting from './Components/SideBarContent/Setting/Setting'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/> 
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/HomeContent' element={<HomeContent/>}/>
        <Route path='/Setting' element={<Setting/>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App;