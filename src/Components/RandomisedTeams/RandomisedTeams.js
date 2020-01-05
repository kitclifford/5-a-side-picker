import React from 'react';
import { Table } from 'react-bootstrap';

const RandomisedTeams = ({ team1, team2, team_one_color, team_two_color, team_one_name, team_two_name }) => (

    <div className="players_table">
        <Table>
            <thead>
                <tr>
                    <td>{ team_one_name }</td>
                    <td>{ team_two_name }</td>
                </tr>
            </thead>
            <tbody>
                { team1.map((player, index) => (
                <tr key={ index }>
                    <td>{ player.name }</td>
                    <td>{ team2[index].name }</td>
                </tr>   
                ))}
            </tbody>
        </Table>
    </div>
    

) 

export default RandomisedTeams;