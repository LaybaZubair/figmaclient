import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Author from "./pages/Author";
import Contactt from "./pages/Contactt";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/home/navbar/Navbar";
import Footer from "./components/home/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/yes" element={<Blogpost />} />
          <Route path="/blog" element={<About />} />
          <Route path="/helo" element={<Categories />} />
          <Route path="/auth" element={<Author />} />
          <Route path="/boss" element={<Contactt />} />
        </Routes>

        {/* <Footer/> */}
      </div>
      


    </>
  );
}

export default App;
