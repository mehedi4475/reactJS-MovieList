import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 10
        }

    }

    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <h1><span onClick = { this.decrease }>-</span>{ this.state.counter }<span onClick = { this.increase }>+</span></h1>
        )
    }
}

export default Counter