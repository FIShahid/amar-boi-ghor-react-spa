import React from 'react';
import "./Question.css"

const Question = () => {
    return (
        <div className='question-container'>
            <div className='question-text'>
            <h3>How React Works</h3>
            <p>React is a JavaScript Library that is used to build efficient, interactive and flexible UI. React code works in a declarative way. Which means it has some different core parts. Like Components and Hooks. Each component is similar in look and different in data. And each components and hooks declares what each element does.   </p>
            </div>
            <div className='question-text'>
            <h3>How useState Works</h3>
            <p>useState is a React Hooks. When any state of the component needs to changed useState is used. It has some built in functionality. First initial state is set. Then it will  call a function to return the initial value. Then another function is called to update the state </p>
            </div>
            <div className='question-text'>  
            <h3>State Vs Props</h3>
            <p>Props are short for properties which is use to pass data even functions from one component to another. Props is read only which means it can not be modified. We can use props in both functional and state component. In State data is passed within the components only. It is mutable which means it can be modified. </p>
            </div>
        </div>
    );
};

export default Question;