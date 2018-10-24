import React from 'react';
import Option from './Option';

const Options = (props) =>  (
        <div>
            <button onClick={props.handleRemoveAll} >Remove All</button>
            { props.options.length < 1 && <p>Please Add An option to get Started</p>}
                {
                    props.options.map(
                        option => <Option handleDeletSingleOpton={props.handleDeletSingleOpton} key={option} option={option}/>
                    )
                }
        </div>
    );

export default Options;