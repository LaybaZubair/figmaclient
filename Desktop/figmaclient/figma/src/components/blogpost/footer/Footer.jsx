import React from 'react'
import './Footer.css'
function Footer() {
  return (
  <>
  <div className='mmm'>
    <div className='footer'>
    <div className="navbar-logo">Finesweet</div>
    <div className='gap'>
    <li className="nav-item">Home </li>
    <li className="nav-item">Blog </li>
    <li className="nav-item">About us </li>
    <li className="nav-item">Contact us </li>
    <li className="nav-item">privacy policy </li>


        </div>
        </div>
        <div className='ccc'>
    <div style={{ display: 'flex', gap: '80px', padding: '20px',width:'100%' ,}}>
        <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#3f3f66' ,width:'1450px',height:'200px'}}>
     <div className='footerrow'>
      <h1 className='letter'>Subscribe to our news letter to <br />latest updates and news</h1>
      <input type="email" name="" id="" placeholder='Enter your Email' className='input'/>
      <button className='sub'> Subscribe</button>
      </div>
        </div>
    </div>
    </div>
    </div>
  </>
  )
}

export default Footer