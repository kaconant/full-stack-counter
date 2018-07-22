import React, { Component } from 'react';

class Counter extends Component {
    
    constructor() {
        super();
        this.state = {
            value: 4
        }
    }
    
    handleClick() {
        this.setState({ 
            value: this.state.value +1 
        });
    }

    render() {
        return <h1 onClick={ this.handleClick.bind(this) }>{ this.state.value}</h1>
    }
}

export default Counter;