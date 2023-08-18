import React, { useState,useEffect } from 'react'
import './Cart.css'
import { fetchAsync, deleteAsync} from './cartSlice';
import { useDispatch, useSelector } from 'react-redux'
export function Cart() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.item.items);

  const handleChange  = (e) =>{
    console.log(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchAsync());
  }, [])
  
  return (
    <div>
      {state.map((item) => (
        <div className="cart-item">
          <img src={item.thumbnail} alt="Item Image" className="item-image" />
          <div className="item-details">
            <span className="item-brand">{item.title}</span>
            <span className="item-price">${item.price}</span>
            <div>
              Quantity:<select name="" id="" onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>

            {/* <span className="item-quantity">Quantity: {item.quantity}</span> */}
            <button onClick={()=>dispatch(deleteAsync(item))}>X</button>
          </div>
        </div>
      ))}

    </div>
  )
}