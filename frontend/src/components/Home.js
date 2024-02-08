import '../App.css';

import React from 'react'

import Carousal from './Carousal'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Goals from './Goals'

import NavBar from './NavBar';








function Home() {
  return (


        <>
	<NavBar/>
	<Carousal/>
    <About/>
    <Goals/>
    <Contact/>
    <Footer/>



        </>







   
  )
}

export default Home
