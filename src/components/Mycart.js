import React from 'react';

function Mycart(props) {
    const { cartitem, onAdd, onRemove } = props;
    const TotalPrice = cartitem.reduce((a,b) => a + b.qty*b.price, 0);
    const Shippingcharges = TotalPrice > 3000 ? 0 : 200; 
    const Grandtotal = TotalPrice + Shippingcharges;

  return <div className='container'>
      <h1 className='text-center text-primary display-3'>My Cart</h1>
      <table className='table table-bordered'>
          <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Add</th>
          <th>Quantity</th>
          <th>Remove</th>
          <th>Image</th>
          </tr>
          {
              cartitem.map((item) =>(
                  <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><button className='btn btn-success' onClick={() => onAdd(item)}>+</button></td>
                      <td>{item.qty}</td>
                      <td><button className='btn btn-danger' onClick={() => onRemove(item)}>-</button></td>
                      <td><img src={item.image} style={{width:'100px', height: '100px'}}/></td>
                  </tr>

              ))
          }
          </table>
          <p>Total bill Rs.{TotalPrice}</p>
          <p>Shipping Charges Rs.{Shippingcharges}</p>
          <p>Grand Total Rs.{Grandtotal}</p>


  </div>;
}

export default Mycart;
