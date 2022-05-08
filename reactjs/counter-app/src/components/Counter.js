import React, { useState } from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCounter(newValue) {
        this.setState({
            count: newValue
        });
    }


    render() {
        return (<div>
            <p>You have clicked {this.state.count} times.</p>
            <button onClick={() => this.incrementCounter(this.state.count + 1)}>Click Me</button>
        </div>);
    }
}

export default Counter;