import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    console.log(cart);
    
    
  

       return (
        <div className='cart'>
            <div className='cart info'>
            <img  src={cart.image} alt="" />
             <p > {cart.title}</p>
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </div>
             

        </div>
        
    );
};

export default Cart;