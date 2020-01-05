import React from 'react';

import AddPlayer from '../AddPlayer';
import CreatedPlayerList from '../CreatedPlayerList';
import GenerateTeamsButton from '../GenerateTeamsButton';
import ResetButton from '../ResetButton';
import TeamsCustomisation from '../TeamsCustomisation';

const TeamsSetup = ({ teamsPicked, generateButtonText, players, playersPerSide }) => (

    <div style ={ { display: teamsPicked ? 'none' : 'block' } }>
        <AddPlayer/>
        <div 
        className="add_player_buttons" 
        style={ { display: players.length === (playersPerSide * 2) ? "flex" : "none"} }>
            <GenerateTeamsButton buttonText={ generateButtonText }/>
            <ResetButton/>
        </div>
        <CreatedPlayerList/>
        <TeamsCustomisation/>
    </div>

)

export default TeamsSetup;

