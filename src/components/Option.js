import React from 'react';

const Option = (props) => (
    <div>
        {props.option}
         <button 
         className="button button--link"
         onClick={() => props.handleDeletSingleOpton(props.option)}
         >Remove</button>
    </div>
);

export default Option;