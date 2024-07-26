import { useState } from 'react'
import Header from '../components/Header'
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
