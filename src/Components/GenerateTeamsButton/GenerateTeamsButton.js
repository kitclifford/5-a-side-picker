import React from 'react';

import { Button } from 'react-bootstrap';


const GenerateTeamsButton = ({ players, generateTeams, buttonText, playersPerSide }) => (

    <Button
        onClick={ generateTeams }
        style={ { display: players.length === (playersPerSide * 2) ? "block" : "none"} }>
        { buttonText }
    </Button>

)

export default GenerateTeamsButton;