import React from 'react';

import { Button } from 'react-bootstrap';


const GenerateTeamsButton = ({ players, generateTeams, buttonText }) => (

    <Button
        onClick={ generateTeams }
        style={ { display: players.length === 10 ? "block" : "none"} }>
        { buttonText }
    </Button>

)

export default GenerateTeamsButton;