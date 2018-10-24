import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handlePickOkay}
        contentLabel="Selected Options"  
    >
        <h3>Selected Options</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handlePickOkay}>Okay</button>
    </Modal>
);

export default OptionModal;