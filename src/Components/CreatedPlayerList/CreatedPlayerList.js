import React from 'react';

import CreatedPlayer from '../CreatedPlayer/CreatedPlayer';

const CreatedPlayerList = ({ players }) => (
    <>
        { players.map ((player, index) => (
            <CreatedPlayer key={ index } listposition={ index } name={ player.name }/>
        ))}
    </>
);

export default CreatedPlayerList;