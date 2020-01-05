import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

import { SliderPicker } from 'react-color';

class TeamsCustomisation extends Component{

    constructor(props){
        super(props)

        this.state={
            playersPerSide: this.props.playersPerSide,
            color_one: 'red',
            color_two: 'blue'

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCompleteTeamOne = this.handleChangeCompleteTeamOne.bind(this);
        this.handleChangeCompleteTeamTwo = this.handleChangeCompleteTeamTwo.bind(this);

    }

    handleChange(e){
        this.props.changeNumberPerSide(e.currentTarget.value);

        this.setState({ playersPerSide: e.currentTarget.value });
    }

    handleChangeCompleteTeamOne = (color) => {
        this.setState({ color_one: color.hex });
    }

    handleChangeCompleteTeamTwo = (color) => {
        this.setState({ color_two: color.hex });
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
                        type="number" min="3" max="18"
                        onChange={ this.handleChange }
                    />
                </Form.Group>
                <div className="team_customisation">
                    {/* Team 1 Shirt Color Picker */}
                    <div>
                        <svg className='shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ this.state.color_one }/><path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/></svg>
                        <SliderPicker color={ this.state.color_one } onChangeComplete={ this.handleChangeCompleteTeamOne }/>
                    </div>
                    <div>
                        <svg className='shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ this.state.color_two }/><path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/></svg>
                        <SliderPicker color={ this.state.color_two } onChangeComplete={ this.handleChangeCompleteTeamTwo }/>
                    </div>
                </div>
                
            </Form>
        )
    }

}

export default TeamsCustomisation;