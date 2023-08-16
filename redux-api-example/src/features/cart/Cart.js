import React, { useState } from 'react'
import './Cart.css'

import { useDispatch, useSelector } from 'react-redux'
export function Cart() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.item.items);
  const [quantity, setQuntity] = useState(1);

  return (
    <div>
      {state.map((item) => (
        <div className="cart-item">
          <img src={item.thumbnail} alt="Item Image" className="item-image" />
          <div className="item-details">
            <span className="item-brand">{item.title}</span>
            <span className="item-price">${item.price}</span>
            <select name="" id="" onClick={(e)=>setQuntity(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <span className="item-quantity">Quantity: {quantity}</span>
            <button>X</button>
          </div>
        </div>
      ))}

    </div>
  )
}