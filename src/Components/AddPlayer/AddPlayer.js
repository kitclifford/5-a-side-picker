import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddPlayer extends Component{

    constructor(props){
        super(props)

        this.state={
            name:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.name !== ""){
            this.props.makePlayer(this.state);

            this.setState({
                name: "",
            });
        }
    }

    render(){
        return(
            <Form onSubmit={ this.handleSubmit }>
                <Form.Group>
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control 
                        value= { this.state.name }
                        type="text"
                        onChange={ this.handleChangeName }
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Add Player</Button>
            </Form>
        );
    };

};

export default AddPlayer;