class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three']
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put you life in a computer. Bro!!';
        const options = ['Thing One', 'Thing Two', 'Thing Three']
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Actions hasOptions={this.state.options.length > 0}/>
            <Options options={this.state.options}/>
            <AddOptions />
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
    handlePick() {
        alert('handle Pick')
    }
    render(){
        return (
            <div>
            <button onClick={this.handlePick} disabled={!this.props.hasOptions}> What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll} >Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(`This is aoption ${option}`)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text"></input>
                    <button type="submit" >Add options</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))