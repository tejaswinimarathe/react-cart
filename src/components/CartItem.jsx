import React from 'react'
import {toast} from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
   dispatch(remove(item.id));
   toast.error('Item removed from cart!');
  }
  return (
    <div className='col-12 d-flex p-5'>
      <div className="img  ">
        <img src={item.image} alt=""  height={200} width={200}/>
      </div>
      <div className=''>
        <b>{item.title}</b>
        <p>{item.description}</p>
        <p><b className='text-success'>${item.price}</b></p>
        <p><button className='btn btn-danger' onClick={removeFromCart}><FaTrash/></button></p>
      </div>
    </div>

  )
}

export default CartItem
