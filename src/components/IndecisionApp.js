import React from 'react';
import AddOptions from './Addoptions';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeletSingleOpton = this.handleDeletSingleOpton.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        console.log('fetching Data');
        try {
            const json = localStorage.getItem('options');
            this.setState(() => ({ options : json ? JSON.parse(json) : [] }));
        } catch(error) {
            console.log(error)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('saving data');
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handlePick() {
        const randomInt = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomInt]);
    }

    handleAddOption(singleOption) {
        if (!singleOption) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(singleOption) > -1) {
            return 'Entered Option Already Exists';
        }
        this.setState((prevState) => ({options: [...prevState.options, singleOption] }));
    }

    handleDeletSingleOpton(optionToRemove) {
        console.log('handleDeletSingleOpton option', optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put you life in a computer. Bro!!';
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Actions 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />

            <Options
                options={this.state.options} 
                handleRemoveAll={this.handleRemoveAll}
                handleDeletSingleOpton={this.handleDeletSingleOpton}
                />
            <AddOptions handleAddOption={this.handleAddOption} />
        </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
