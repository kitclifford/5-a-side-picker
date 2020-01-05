import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ResetButton from '../ResetButton';

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

        let { players, playersPerSide } = this.props;

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
                <div className="add_player_buttons" style={ {display: players.length === (playersPerSide * 2) ? "none" : "flex" } }>
                    <div className="add_player_info">
                        <Button 
                            variant="light" 
                            type="submit"
                        >Add Player</Button>
                        <p
                            style={ { 
                                display: ((playersPerSide * 2) - players.length) > 0 ? "flex" : "none"  }}
                        >
                        Add { (playersPerSide * 2) - players.length } more player{ ((playersPerSide * 2) - players.length) === 1 ? '' : 's' }.
                        </p>
                    </div>
                    <ResetButton/>
                </div>
                
            </Form>
        );
    };

};

export default AddPlayer;