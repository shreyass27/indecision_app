class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
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
        this.setState((prevState) => {
            return {
                options: [...prevState.options, singleOption]
            };
        });
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
                handleRemoveAll={this.handleRemoveAll}/>
            <AddOptions handleAddOption={this.handleAddOption} />
        </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        )
    }
}

class Actions extends React.Component {
    

    render(){
        return (
            <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}> What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll} >Remove All</button>
                    {
                        this.props.options.map(
                            option => <Option key={option} option={option}/>
                        )
                    }
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>{this.props.option}</div>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';
        this.setState(() => {
            return { error };
        })
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error }</p> }
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text"></input>
                    <button type="submit" >Add options</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))