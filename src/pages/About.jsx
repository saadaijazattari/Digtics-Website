import React from 'react'
import Navbar from '../components/Navbar'
import Development from '../components/Development'
import Client_review from '../components/Client_review'
import ClientsMedia from '../components/ClientsMedia'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Development/>
      <Client_review/>
      <ClientsMedia/>
      <Footer/>
    
    </div>
  )
}

export default About
