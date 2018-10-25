import React from 'react';
import AddOptions from './Addoptions';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionsModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }

    handlePick = () => {
        const randomInt = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[randomInt]
        }));
    }

    handleAddOption = (singleOption) => {
        if (!singleOption) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(singleOption) > -1) {
            return 'Entered Option Already Exists';
        }
        this.setState((prevState) => ({options: [...prevState.options, singleOption] }));
    }

    handleDeletSingleOpton = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePickOkay = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            this.setState(() => ({ options : json ? JSON.parse(json) : [] }));
        } catch(error) {
            console.log(error)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put you life in a computer. Bro!!';
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <div className="container">
                <Actions 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <div className="widget">
                    <Options
                        options={this.state.options} 
                        handleRemoveAll={this.handleRemoveAll}
                        handleDeletSingleOpton={this.handleDeletSingleOpton}
                        />
                    <AddOptions handleAddOption={this.handleAddOption} />
                </div>
            </div>
            <OptionModal 
            handlePickOkay={this.handlePickOkay}
            selectedOption={this.state.selectedOption}/>
        </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
