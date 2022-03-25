import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
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
              {
                  books.map(book=><Books
                  key ={book.id}
                  book ={book}
                  
                  ></Books>)
              } 
          </div>

          <div className="cart-container">
            <h3>Selected Books</h3>
          </div>
        </div>
    );
};

export default Shop;