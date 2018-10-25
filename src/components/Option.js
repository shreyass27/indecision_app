import React from 'react';

const Option = (props) => (
    <div className="option">
    <span className="option__text">{props.count}.{props.option} </span>
         <button 
         className="button button--link"
         onClick={() => props.handleDeletSingleOpton(props.option)}
         >Remove</button>
    </div>
);

export default Option;