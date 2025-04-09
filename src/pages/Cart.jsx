import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
console.log('cart',cart)
  useEffect(()=>{
  setTotalAmount(cart.reduce((acc,currVal)=>acc+currVal.price,0))
  },[cart])
  return (
    <div className='container'>
      {
        cart.length > 0 ?
        (<div className='row'>
          <div className='col-8'>
            {
            cart.map((item,index)=>(
              <CartItem key={item.id} item={item} itemIndex={index}/>
              
            ))
          }

          </div>
          
          <div className='col-4'>
            <div>
              <br /><br />
              <h3>Your Cart</h3>
              <br />
              <p><b>Summery</b></p>
              <br />
              <p><span>Total Items: <b>{cart.length}</b></span></p>
            </div>
            <br />
            <div>
              <p>Total Amount: <b className='text-success'>{totalAmount}</b></p>
              <br />
              <button className='btn btn-success'>CheckOut Now</button>
            </div>
          </div>


        </div>
       )
  
        :
        (
          <div className='' style={{margin:'100px auto'}} >
            <h1>Your Cart Is Empty</h1>
            <br />
            <NavLink to='/'><button className='btn btn-success'>Shop Now</button></NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart


