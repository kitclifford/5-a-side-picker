import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

import delete_icon from '../../Media/svgs/delete-button.svg';


class CreatedPlayerList extends Component{
    
    constructor(props){
        super(props)

        this.state={

        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);

    }

    handleDelete(e){ 
        this.props.deletePlayer(e.currentTarget.id);
    }

    handleGenerate(){
        this.props.generateTeams();
    }

    render(){

        let { players } = this.props;

        return(
            <>
                { players.map ((player, index) => (
                    <Card key={ index }>
                        <div className="player_card">
                            <p>{ player.name }</p>
                            <img 
                                src={ delete_icon } 
                                className="delete_icon"
                                onClick={ this.handleDelete }
                                alt='Delete icon'
                                id={ player.name }
                            />
                        </div>
                    </Card>
                )) }
            </>
        )
    }
}

export default CreatedPlayerList;