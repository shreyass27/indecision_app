
class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            isVisible: false
        };
    }
    
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        })
    }
    render() {
        return (
        <div>
            <h1> Visibility Toggle </h1>
            <button onClick={this.toggleVisibility}>{ this.state.isVisible ? 'Hide Details' : 'Show Details '}</button>
            { this.state.isVisible && (<p> Here Are the detials that can be toggled</p>)}
        
        </div>
        )
    }
}


    ReactDOM.render(<Visibility />, document.getElementById('app'));  

// let isVisible = false;


// const toggleVisibility = () => {
//     isVisible = !isVisible;
//     renderDom();
// };


// const appRoot = document.getElementById('app');

// const renderDom = () => {
//     const template = (
//         <div>
//         <h1> Visibility Toggle </h1>
//         <button onClick={toggleVisibility}>{ isVisible ? 'Hide Details' : 'Show Details '}</button>
//         { isVisible && (<p> Here Are the detials that can be toggled</p>)}
        
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot);  
// }

// renderDom();