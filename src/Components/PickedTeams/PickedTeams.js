import React from 'react';

import ResetButton from '../ResetButton';

import GenerateTeamsButton from '../GenerateTeamsButton';

import RandomisedTeams from '../RandomisedTeams';

const PickedTeams = ({ teamsPicked, generateButtonText }) => (

    <div style ={ { display: teamsPicked ? 'block' : 'none' } }>
        <RandomisedTeams/>
        <GenerateTeamsButton buttonText={ generateButtonText } />
        <ResetButton/>
    </div>

)

export default PickedTeams;