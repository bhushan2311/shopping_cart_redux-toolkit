import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postAsync } from '../cart/cartSlice';

import {
  fetchAsync
} from './productsSlice';
import './Products.css';

export function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync())
  }, [])

  const state = useSelector((state) => state.product.products);
  return (
    <div>
      <nav>
      {/* <button
          className="button"
          onClick={() => dispatch(fetchAsync())}
        >
          Fetch Products
        </button> */}
      </nav>
      <div className="row">

        {state.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{item.title}</h1>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
            <p><button onClick={()=> dispatch(postAsync(item))}>Add to Cart</button></p>
          </div>
        ))}
      </div>

    </div>
  );
}
