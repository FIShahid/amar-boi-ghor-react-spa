import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import "./Books.css"

const Books = ({handleAddToCart, book}) => {
    
   const {image, title, author ,price} =book;
    return (
        <div className='books-container'>
            <img id='book-image' src={image} alt="" />
            <div className='book-info'>
            <h3 className='book-title'>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: ${price}</p>
           
            </div>
            <button onClick={()=>handleAddToCart(book)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
        
    );
};

export default Books;