import React from 'react';

class Item extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {
            clicks: 0,
            totalremaining: 100
        }
    }
    
    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalremaining: this.state.totalremaining - 1
        })
        console.log("I was clicked!")
    }

render() {
        return (
            <div>
            <h1 onClick={() => this.clickMe()}>
                Hello from {this.props.name} 
            </h1>
            <span>
                Clicks: {this.state.clicks} is the number of clicks. {this.state.totalremaining} remaining.
            </span>
            </div>
        )
    }
}
export default Item;