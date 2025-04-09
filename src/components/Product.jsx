import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import {add,remove} from '../redux/slices/CartSlice';
import { ToastContainer,toast } from 'react-toastify';

const Product = ({ post }) => {
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
      dispatch(add(post));
      toast.success('Item added to cart!')
    }
    
    const removeFromCart=()=>{
      dispatch(remove(post.id));
      toast.error('Item removed from cart!')
    }
  return (
   <>
   <br />
    <div className="card border-0 shadow" style={{ width: '18rem' }}>
      <div className="card-header">
        <img className="" src={post.image} style={{height:'250px',width:'200px',objectFit:'cover'}}  alt="Card image cap" />
      </div>
      <div className="card-body">
        <h6 className="">{post.title.split('').slice(0,30).join('')+'...'}</h6>
        <p className="card-text ">{post.description.split('').slice(0,30).join('')+'...'}</p>
        <p className="card-text">{post.price}</p>
        <p className="">{cart.some((p)=>p.id==post.id) ?
          (<button className='btn btn-danger' onClick={removeFromCart}>Remove Item</button>) :
          (<button className='btn btn-success' onClick={addToCart}>Add to Cart</button>)}</p>
      </div>
    </div>
   
   </>
  );
};


export default Product;
