import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'

function Home() {
  return (
    <>
     <Navbar/>
     <Hero />
     <Product />
     <Contact />
     <About/>
    </>
  )
}

export default Home