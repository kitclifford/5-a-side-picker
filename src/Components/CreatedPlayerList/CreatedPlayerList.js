import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import delete_icon from '../../Media/svgs/delete-button.svg';


class CreatedPlayerList extends Component{
    
    constructor(props){
        super(props)

        this.state={

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){ 
        this.props.deletePlayer(e.currentTarget.id);
    }

    render(){
        return(
            this.props.players.map ((player, index) => (
                <Card key={ index }>
                    <div className="player_card">
                        <p>{ player.name }</p>
                        <img 
                            src={ delete_icon } 
                            className="delete_icon"
                            onClick={ this.handleClick }
                            alt='Delete icon'
                            id={ player.name }
                        />
                    </div>
                </Card>
            ))
        )
    }

}

export default CreatedPlayerList;