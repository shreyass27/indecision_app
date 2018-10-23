
class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        const count = +localStorage.getItem('count');
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('saving data');
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    componentWillUnmount() {

    }
    handleAddOne() {
        // this.state.count++;
        // console.log('handleAddOne');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleResetCount() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetCount}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'))
// let currentCount = 0;
// const myId = 'myIdHere'
// const addOne = () => {
//     currentCount++;
//     renderCounterApp();
//     console.log('addOne');
// }

// const minusOne = () => {
//     currentCount--;
//     renderCounterApp();
//     console.log('minusOne');
// }

// const reset = () => {
//     currentCount = 0;
//     renderCounterApp();
//     console.log('reset');
// }



// const renderCounterApp = () => {
     
//     const templateTwo = (
//         <div>
//             <h1>Count: {currentCount}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={renderCounterApp}>Rerender</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo , appRoot);
// }

// renderCounterApp();