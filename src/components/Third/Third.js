import React, { Component } from 'react';
import "./Third.css"

class Third extends Component{
    render(){
        return(
            <div>
                <h1>My name is { this.props.name } and my age is { this.props.age }</h1>
            </div>
        )
    }
}

export default Third