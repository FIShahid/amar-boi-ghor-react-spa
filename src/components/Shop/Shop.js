import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import "./Shop.css"

const Shop = () => {

    const [books, setBooks] =useState([]);
    const [carts, setCarts] =useState([]);
    const [random, setRandom] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);

    const handleAddToCart =(book)=>{
        console.log(book);
        const newBook =[...carts, book]
        setCarts(newBook);
    }

    const chooseOne = ()=>{
        
        let randBook = carts[Math.floor(Math.random() * carts.length)];
        setRandom(randBook);
    }

    const resetButton =()=>{
       const  reset =[];
       setCarts(reset);
       setRandom(reset);
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
          <h3>Selected Books</h3>
              {
                  carts.map(cart=> <Cart cart={cart}
          
                    key={cart.id}
                    ></Cart>)
              }
              <button onClick={chooseOne}><p>Choose One</p></button>
              <button onClick={resetButton}><p>Reset</p></button>

              <h1> Selected: {random.title}</h1>

          
                

          </div>
        </div>
    );
};

export default Shop;