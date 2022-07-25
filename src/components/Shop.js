import React, { useState } from 'react';

function shop(props) {
    const { products, onAdd } = props
    return <div className='container'>
         <h1 className='text-center text-danger display-3'>Add Your Products</h1>
        <div className='row'>
           
            {
                products.map((pro) => (


                    <div className='col-md-4'>
                        <div className="card" >
                            <img src={pro.image} className="card-img-top"  />
                            <div className="card-body">
                                <h5 className="card-title">{pro.name}</h5>
                                <p className="card-text">{pro.price}</p>
                                <a onClick={() => onAdd(pro)} className="btn btn-primary">Add</a>
                            </div>
                        </div>


                    </div>
                ))
            }


        </div>


    </div>;
}

export default shop;