class IndecisionApp extends React.Component {
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Actions = (props) => {

    return (
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}> What should I do ?</button>
        </div>
    );
}


const Options = (props) => {

    return (
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
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={() => props.handleDeletSingleOpton(props.option)}>Remove</button>
        </div>
    );
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = { error: undefined };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ( { error }) );

        if (!error) {
            e.target.elements.option.value = '';
        }
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