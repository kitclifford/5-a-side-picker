import React, { Component } from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import { SliderPicker } from 'react-color';

// Component for customising players per side, team shirt colours and team names.
// Doesn't display by default, the jumbotron needs to be clicked to show options (closed by saving settings or clicking header).
// Saving passes data up to state which has default settings otherwise.

class TeamsCustomisation extends Component{

    constructor(props){
        super(props)

        this.state={
            playersPerSide: this.props.playersPerSide,
            color_one: 'red',
            color_two: 'blue',
            team_one_name: 'Team 1',
            team_two_name: 'Team 2',
            customisation: false
        }

        this.handleChangePlayersPerSide = this.handleChangePlayersPerSide.bind(this);
        this.handleChangeCompleteTeamOneColor = this.handleChangeCompleteTeamOneColor.bind(this);
        this.handleChangeCompleteTeamTwoColor = this.handleChangeCompleteTeamTwoColor.bind(this);
        this.handleChangeTeamOneName = this.handleChangeTeamOneName.bind(this);
        this.handleChangeTeamTwoName = this.handleChangeTeamTwoName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickCustomise = this.handleClickCustomise.bind(this);
    }

    handleChangePlayersPerSide(e){
        this.setState({ playersPerSide: e.currentTarget.value });
    }

    handleChangeCompleteTeamOneColor = (color) => {
        this.setState({ color_one: color.hex });
    }

    handleChangeCompleteTeamTwoColor = (color) => {
        this.setState({ color_two: color.hex });
    }

    handleChangeTeamOneName(e){
        this.setState({ team_one_name: e.currentTarget.value });
    }

    handleChangeTeamTwoName(e){
        this.setState({ team_two_name: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({ customisation: false });
        this.props.teamsCustomisation(this.state);
    }

    handleClickCustomise(){
        if (this.state.customisation) {
            this.setState({ customisation: false });
        } else {
            this.setState({ customisation: true });
        }       
    }

    render(){
        // Show settings if Team Settings has been clicked
        if (this.state.customisation){
            return(
                <Jumbotron                     
                    className="customisation_jumbotron"
                >
                    <h1
                        onClick={ this.handleClickCustomise }
                    >Team Settings &#9660;</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Players Per Side</Form.Label>
                            <Form.Control 
                                value= { this.state.playersPerSide }
                                type="number" step="1"
                                onChange={ this.handleChangePlayersPerSide }
                            />
                        </Form.Group>
                        <div className="team_customisation">
                            {/* Team 1 Shirt Color and Name Picker */}
                            <div className="individual_team_customisation">
                                <h3>Team 1</h3>
                                <svg className='shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ this.state.color_one }/><path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/></svg>
                                <SliderPicker color={ this.state.color_one } onChangeComplete={ this.handleChangeCompleteTeamOneColor }/>
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={ this.state.team_one_name }
                                    onChange={ this.handleChangeTeamOneName}
                                ></Form.Control>
                            </div>

                            {/* Team 2 Shirt Color and Name Picker */}
                            <div className="individual_team_customisation">
                                <h3>Team 2</h3>
                                <svg className='shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ this.state.color_two }/><path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/></svg>
                                <SliderPicker color={ this.state.color_two } onChangeComplete={ this.handleChangeCompleteTeamTwoColor }/>
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={ this.state.team_two_name }
                                    onChange={ this.handleChangeTeamTwoName}
                                ></Form.Control>
                            </div>
                        </div>
                        <Button
                            variant="light"
                            onClick={ this.handleSubmit }
                            className="save_button"
                        >Save Settings</Button>
                    </Form>
                </Jumbotron>
            )
        } else {
            return(
                <Jumbotron 
                    onClick={ this.handleClickCustomise }
                    className="customisation_jumbotron"
                >
                    <h1>Team Settings &#9654;</h1>
                </Jumbotron>
            )
        }
    }

}

export default TeamsCustomisation;