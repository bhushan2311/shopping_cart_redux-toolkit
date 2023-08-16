import React from 'react'; 
import { Products } from './features/products/Products';
import './App.css';
import {Cart} from './features/cart/Cart';
function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Products></Products>
    </div>
  );
}

export default App;
