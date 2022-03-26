import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import "./Shop.css"

const Shop = (props) => {

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

        if(carts.length>=4){
            alert("You Have Selected more than can you Read ")
            return;
        }
        setCarts(newBook);
    }

    const chooseOne = ()=>{
        const empty=[]
        
        let randBook = carts[Math.floor(Math.random() * carts.length)];
        setRandom(alert(randBook.title));
        setCarts(empty)
        
       
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
          <h3>Selected Books: </h3>
              {
                  carts.map(cart=> <Cart cart={cart}
                    
                    key={cart.id}

                    ></Cart>)
                }
              <button className='choose-btn' onClick={chooseOne}><p>Choose One</p></button>
              {/* <h4>Seceted: {random.title}</h4> */}
               
               
             
              <br/>

              <button className='reset-btn' onClick={resetButton}><p>Reset</p></button>


          
                

          </div>
        </div>
    );
};

export default Shop;