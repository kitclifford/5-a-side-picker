import React from "react";
import { Card } from 'react-bootstrap';
import delete_icon from '../../Media/svgs/delete-button.svg';

const CreatedPlayer = () => (
    <Card>
        <div className="player_card">
            <p>{ this.props.name }</p>
            <img src={ delete_icon } className="delete_icon"/>
        </div>
    </Card>
);

export default CreatedPlayer;