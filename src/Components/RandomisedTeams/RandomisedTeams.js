import React from 'react';
import { Table } from 'react-bootstrap';

const RandomisedTeams = ({ team1, team2 }) => (

    <div className="players_table">
        <Table>
            <thead>
                <th>Team 1</th>
                <th>Team 2</th>
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