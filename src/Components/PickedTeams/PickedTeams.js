import React from 'react';

import ResetButton from '../ResetButton';
import RandomisedTeam1 from '../RandomisedTeam/RandomisedTeam1';
import RandomisedTeam2 from '../RandomisedTeam/RandomisedTeam2';
import GenerateTeamsButton from '../GenerateTeamsButton';

const PickedTeams = ({ teamsPicked, generateButtonText }) => (

    <div style ={ { display: teamsPicked ? 'block' : 'none' } }>
        <RandomisedTeam1/>
        <RandomisedTeam2/>
        <GenerateTeamsButton buttonText={ generateButtonText } />
        <ResetButton/>
    </div>

)

export default PickedTeams;