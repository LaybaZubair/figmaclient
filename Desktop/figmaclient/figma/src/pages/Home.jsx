import React from "react";
import Navbar from "../components/home/navbar/Navbar";
import Photos from "../components/home/photos/Photos";
import Feauters from "../components/home/feature/Feautres";
import About from "../components/home/about/About";
import Category from "../components/home/category/Category";
import Simple from "../components/home/simple/Simple";
import Material from "../components/home/material/Material";
import Testimonial from "../components/home/testimonilas/Testimonial";
import Join from "../components/home/join/Join";
import Footer from "../components/home/footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="media">
      
      <Photos />
     <Feauters />
        <About />
    <Category />
        <Simple />
     <Material />
   <Testimonial />
        <Join /> 
  
    </div>
  );
}

export default Home;
