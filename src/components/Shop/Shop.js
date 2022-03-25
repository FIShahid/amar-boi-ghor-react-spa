import React, { useEffect, useState } from 'react';
import "./Shop.css"

const Shop = () => {

    const [books, setBooks] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);

    return (
        <div className='shop-container'>
          <div className="product-container">
              <h3>This is for Books: {books.length}</h3>  
          </div>

          <div className="cart-container">
            <h3>Selected Books</h3>
          </div>
        </div>
    );
};

export default Shop;