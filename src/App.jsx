import { useState } from 'react'
import Nav from '../components/Navigation'
import Header from '../components/Header'
import Project from '../components/Project'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'





function App() {


  return (
    <>
      <Header />
        <Outlet />
      <Footer/>
    </>
  )
}

export default App
