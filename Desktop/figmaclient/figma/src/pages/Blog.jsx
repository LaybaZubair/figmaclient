import React from 'react'
import Navbar from '../components/home/navbar/Navbar'
import Post from '../components/blog/post/Post'
import Pictures from '../components/blog/pictures/Pictures'
import Category from '../components/blog/category/Category'
import Join from '../components/blog/join/Join'
import Footer from '../components/blog/footer/Footer'

function Blog() {
  return (
    <div>
    
        <Post/>
        <Pictures/>
        <Category/>
        <Join/>
 
     
    </div>
  )
}

export default Blog