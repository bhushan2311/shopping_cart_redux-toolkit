import React, { useEffect } from 'react';
import { Products } from './features/products/Products';
import './App.css';
import { Cart } from './features/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { useSelector,useDispatch } from 'react-redux';
import { fetchAsync } from './features/cart/cartSlice';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, [])

  const totalItems = useSelector((state) => state.item.items.length);
  return (
    <div className="App">
      <Router>
        <Navbar totalItems={totalItems} />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
