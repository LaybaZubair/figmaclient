import React from 'react'
import './List.css'
import first from '../list/first.jpeg'
import two from '../list/two.png'
import three from '../list/three.webp'
import second from '../list/second.jpeg'
import pic7 from '../list/pic7.webp'
function List() {
  return (
    <>
   
    <h2 className='cc'>List of Autor</h2>
    <div className='one'>
    <div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>
    <img src={first } alt="Description of the image" className='picture'/>
    <h3 className='hh'> Floyd Miles</h3>
</div>
</div>
<div className='yellow' style={{ display: 'flex', gap: '80px', padding: '20px', }}>
<div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>    <img src={two} alt="Description of the image" className='picture'/>
    <h3 className='hh'>Dianne Russell</h3>

</div>
</div>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
<div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>    <img src={three} alt="Description of the image" className='picture'/>
    <h3 className='hh'>Jenny Wilson</h3>

</div>
</div>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
<div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>    <img src={second} alt="Description of the image" className='picture'/>
    <h3 className='hh'>Leslie Alexender</h3>
    {/* <p className='pp'>Content writer @company </p> */}
</div>
</div>
</div>

{/* second line */}
<div className='card22'>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>
    <img src={pic7 } alt="Description of the image" className='picture'/>
    <h3 className='hh'> Floyd Miles</h3>

</div>
</div>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>
    <img src={first } alt="Description of the image" className='picture'/>
    <h3 className='hh'> Floyd Miles</h3>
</div>
</div>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>
    <img src={first } alt="Description of the image" className='picture'/>
    <h3 className='hh'> Floyd Miles</h3>
</div>
</div>
<div style={{ display: 'flex', gap: '80px', padding: '20px', }}>
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#F4F4F4',width:'160px',height:'190px' }}>
    <img src={first } alt="Description of the image" className='picture'/>
    <h3 className='hh'> Floyd Miles</h3>
</div>
</div>
</div>
</>
  )
}

export default List