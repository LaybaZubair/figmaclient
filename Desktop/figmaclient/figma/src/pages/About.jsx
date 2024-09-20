import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import Picbeach from '../components/about/picsbeach/Picbeach'
import Content from '../components/about/aboutt/Content'
import Misson from '../components/about/misson/Misson'
import Hand from '../components/about/hand/Hand'
import Group from '../components/about/blog/Group'
import List from '../components/about/aboutt/list/List'
import Join from '../components/blog/join/Join'
import Footer from '../components/blog/footer/Footer'

function About() {
  return (
    <div>
        {/* <Navbar/> */}
   <Content/>
        <Picbeach/>
        <Misson/>
        <Hand/>
        <Group/>
        <List/>
        <Join/>
        {/* <Footer/> */}
    </div>
  )
}

export default About