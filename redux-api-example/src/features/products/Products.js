import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAsync
} from './productsSlice';
import './Products.css';

export function Products() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.product.products);
  return (
    <div>
      <div className="row">

        <button
          className="button"
          onClick={() => dispatch(fetchAsync())}
        >
          Fetch Products
        </button>

        {state.map((item) => (
          <div className="card">
            <img src={item.thumbnail} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{item.title}</h1>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
            <p><button>Add to Cart</button></p>
          </div>
        ))}
      </div>

    </div>
  );
}
