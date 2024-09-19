import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './assets/components/about/About'
import Picture from './assets/components/picture/Picture'
import Misson from './assets/components/misson/Misson'
import Hand from './assets/components/hand/Hand'
import Blog from './assets/components/blog/Blog'
import List from './assets/components/list/List'
import Part from './assets/components/part/Part'
import Last from './assets/components/last/Last'
import Navbar from './assets/components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar/>
      <About/>
      <Picture/>
      <Misson/>
    
      <Hand/>
      <Blog/>
  <List/>
  <Part/>
  <Last/>
      </div>
    </>
  )
}

export default App
