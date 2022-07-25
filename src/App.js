import React from 'react';
import data from './data';
import Shop from './components/Shop';
import {useState} from 'react'
import Mycart from './components/Mycart';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const {products} = data;
  const [cart,Setcart]= useState([]);

  const onAdd = (product) => {
    const exist = cart.find((y) => y.id === product.id);
    if(exist){
      Setcart(
        cart.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1 } : x)
      );
    }else{
      Setcart([...cart,{...product, qty:1}]);
      console.log(cart);
    }
  }
  const onRemove = (product) => {
    const exist = cart.find((y) => y.id === product.id);
    if(exist.qty===1){
      Setcart(cart.filter((x) => x.id !== product.id));
  }else{
      Setcart(
        cart.map((x) => x.id === product.id ? {...exist, qty: exist.qty -1 } : x)
      );
  }
}
  return <div>
    <Router>
    <Cart cartL={cart.length}/> 
    <Routes>
   <Route path="/" element={<Shop products={products} onAdd={onAdd} onRemove={onRemove} />} />
    <Route path="/mycart" element={<Mycart  cartitem={cart} onAdd={onAdd} onRemove={onRemove}  />} />
    </Routes>
    </Router>

  </div>;
}

export default App;
