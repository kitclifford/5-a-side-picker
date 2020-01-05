import React from 'react';

import { Button } from 'react-bootstrap';


const GenerateTeamsButton = ({ players, generateTeams, buttonText, playersPerSide }) => (

    <Button
        variant="light"
        onClick={ generateTeams }
        style={ { display: players.length === (playersPerSide * 2) ? "flex" : "none"} }>
        { buttonText }
    </Button>

)

export default GenerateTeamsButton;