
class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
        this.state = {
            count: 0
        };
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