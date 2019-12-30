import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

class RandomisedTeam extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return(
            <>
                <h2>Team { this.props.teamNumber }</h2>
                { this.props.team.map((player, index) => (
                    <Card key={ index }>
                        <div className="player_card">
                            <p>{ player.name }</p>
                        </div>
                    </Card>
                )) }
            </>
        )
    }
}

export default RandomisedTeam;

