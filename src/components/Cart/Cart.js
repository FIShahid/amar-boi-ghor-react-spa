import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    console.log(cart);
    
    
  

       return (
        <div className='cart'>
          
             <p>Book Name: {cart.title}</p>
             

        </div>
        
    );
};

export default Cart;