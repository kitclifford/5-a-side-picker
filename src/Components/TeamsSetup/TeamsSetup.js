import React from 'react';

import AddPlayer from '../AddPlayer';
import CreatedPlayerList from '../CreatedPlayerList';
import GenerateTeamsButton from '../GenerateTeamsButton';
import ResetButton from '../ResetButton';

import TeamsCustomisation from '../TeamsCustomisation';

const TeamsSetup = ({ teamsPicked, generateButtonText }) => (

    <div style ={ { display: teamsPicked ? 'none' : 'block' } }>
        <AddPlayer/>
        <div className="center_button">
            <GenerateTeamsButton buttonText={ generateButtonText }/>
        </div>
        <CreatedPlayerList/>
        <ResetButton/>
        <TeamsCustomisation/>
    </div>

)

export default TeamsSetup;

