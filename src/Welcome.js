import React, { Component } from "react";


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <h1>Hola {this.props.name}</h1>
        )
    }
}

export default Welcome;