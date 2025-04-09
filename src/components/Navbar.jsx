import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div className="row">
  <div className="d-flex flex-row col-12 bg-black p-2 justify-content-between">
    <div className="col-3 text-white d-flex align-items-center justify-content-center">
      <NavLink to='/' style={{color:'white'}}>
        <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_shoppictcart_1484336527-1.png" height={70} alt="" />
      </NavLink>
    </div>
    <div className="col-3 text-white  d-flex align-items-center justify-content-center" style={{position:'relative'}}>
      <NavLink to='/' style={{color:'white',textDecoration:'none'}}><p className='m-2'>Home</p></NavLink>

      <NavLink to='/cart' style={{color:'white'}}><div style={{height:'20px',width:'20px',borderRadius:'50%', backgroundColor:'white',position:'absolute',top:'15px',right:'px',marginLeft:'15px',color:'black',padding:''}}>{cart.length}</div><FaShoppingCart size={20} /></NavLink>
    </div>
  </div>
</div>

  )
}

export default Navbar
