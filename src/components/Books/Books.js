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
                <p>Add To Cart</p></button>
        </div>
        
    );
};

export default Books;