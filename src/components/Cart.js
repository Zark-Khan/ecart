import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  return <div>
      <nav className='navbar navbar-light bg-light'>
          <Link className='navbar-brand' to={"/mycart"}>
      <i className="fa fa-cart-plus mr-0" area-hidden="true" ></i>
      <span className='badge badge-light'>{props.cartL}</span>
      </Link>
      <Link className='navbar-brand' to={"/"}>shop</Link>
      
      
      </nav> 
  </div>;
}

export default Cart;
