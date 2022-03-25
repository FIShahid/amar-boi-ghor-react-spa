import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import "./Shop.css"

const Shop = () => {

    const [books, setBooks] =useState([]);
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);

    const handleAddToCart =(book)=>{
        console.log(book);
        const newBook =[...cart, book]
        setCart(newBook);
    }
    return (
        <div className='shop-container'>
          <div className="product-container">
              {
                  books.map(book=><Books
                  key ={book.id}
                  book ={book}
                  handleAddToCart={handleAddToCart}
                  
                  ></Books>)
              } 
          </div>

          <div className="cart-container">
           <Cart cart={cart}></Cart>
                

          </div>
        </div>
    );
};

export default Shop;