import React, { Component } from "react";
import { Card } from 'react-bootstrap';

class CreatedPlayer extends Component{
    
    constructor(props){
        super(props)

    }

    render(){
        return(
            <Card>
                <p>{ this.props.name }</p>
            </Card>
        )
    }

}

export default CreatedPlayer;