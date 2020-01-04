import React from 'react';
import { Table } from 'react-bootstrap';

const RandomisedTeams = ({ team1, team2 }) => (

    <Table className="players_table">
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

) 

export default RandomisedTeams;