import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

class TeamsCustomisation extends Component{

    constructor(props){
        super(props)

        this.state={
            playersPerSide: this.props.playersPerSide
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.changeNumberPerSide(e.currentTarget.value);

        this.setState({ playersPerSide: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <Form>
                <Form.Group onSubmit ={ this.handleSubmit }>
                    <Form.Label>Players Per Side</Form.Label>
                    <Form.Control 
                        value= { this.state.playersPerSide }
                        type="number"
                        onChange={ this.handleChange }
                    />
                </Form.Group>
            </Form>
        )
    }

}

export default TeamsCustomisation;