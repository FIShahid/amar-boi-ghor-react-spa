import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    console.log(cart);
    let bookTitle ;
    for (const books of cart){
        bookTitle =  books.title

    }  


       return (
        <div className='cart'>
           <h3>Selected Books</h3>
              <p>Selected Book:{bookTitle}</p>
              <button><p>Choose One</p></button>
              <button><p>Reset</p></button>

        </div>
        
    );
};

export default Cart;