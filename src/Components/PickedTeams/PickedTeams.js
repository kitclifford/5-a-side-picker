import React from 'react';

import ResetButton from '../ResetButton';
import GenerateTeamsButton from '../GenerateTeamsButton';
import RandomisedTeams from '../RandomisedTeams';

const PickedTeams = ({ teamsPicked, generateButtonText }) => (

    <div style ={ { display: teamsPicked ? 'block' : 'none' } }>
        <RandomisedTeams/>
        <div className="randomised_teams_buttons">
            <GenerateTeamsButton buttonText={ generateButtonText } />
            <ResetButton/>
        </div>
    </div>

)

export default PickedTeams;