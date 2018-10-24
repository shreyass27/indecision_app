import React from 'react';

const Actions = (props) => (
    <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}> What should I do ?</button>
    </div>
);

export default Actions;
