import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import Welcome from '../components/author/welcome/Welcome'
import Posttt from '../components/author/posttt/Posttt'
import Footer from '../components/home/footer/Footer'

function Author() {
  return (
    <div>
      {/* <Navbar/> */}
      <Welcome/>
      <Posttt/>
      {/* <Footer/> */}

    </div>
  )
}

export default Author