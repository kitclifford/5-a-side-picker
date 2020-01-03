import React from 'react';

import AddPlayer from '../AddPlayer';
import CreatedPlayerList from '../CreatedPlayerList';
import GenerateTeamsButton from '../GenerateTeamsButton';
import ResetButton from '../ResetButton';

const TeamSettings = ({ teamsPicked, generateButtonText }) => (

    <div style ={ { display: teamsPicked ? 'none' : 'block' } }>
        <AddPlayer/>
        <GenerateTeamsButton buttonText={ generateButtonText }/>
        <CreatedPlayerList/>
        <ResetButton/>
    </div>

)

export default TeamSettings;

