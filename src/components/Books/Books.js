import React from 'react';
import "./Books.css"

const Books = (props) => {
   const {image, title, author ,price} =props.book;
    return (
        <div className='books-container'>
            <img src={image} alt="" />
            <h3 className='book-title'>{title}</h3>
            <p>Author: {author}</p>
            <p> ${price}</p>
        </div>
    );
};

export default Books;