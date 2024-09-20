import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import Business from '../components/categories/business/Business'
import Pictureee from '../components/categories/pictureee/Pictureee'
import Footer from '../components/blog/footer/Footer'

function Categories() {
  return (
    <div>
        {/* <Navbar/> */}
        <Business/>
        <Pictureee/>
        {/* <Footer/> */}
    </div>
  )
}

export default Categories