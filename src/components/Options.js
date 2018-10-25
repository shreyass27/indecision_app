import React from 'react';
import Option from './Option';

const Options = (props) =>  (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleRemoveAll} >
                    Remove All
                </button>
            </div>
            { props.options.length < 1 && <p>Please Add An option to get Started</p>}
                {
                    props.options.map(
                        option => <Option handleDeletSingleOpton={props.handleDeletSingleOpton} key={option} option={option}/>
                    )
                }
        </div>
    );

export default Options;