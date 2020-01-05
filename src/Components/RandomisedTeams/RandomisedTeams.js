import React from 'react';
import { Table } from 'react-bootstrap';

const RandomisedTeams = ({ team1, team2, team_one_color, team_two_color, team_one_name, team_two_name }) => (

    <div className="players_table">
        <Table>
            <thead>
                <tr>
                    <td className='player_table_header'>{ team_one_name }</td>
                    <td className='player_table_header'>{ team_two_name }</td>
                </tr>
            </thead>
            <tbody>
                { team1.map((player, index) => (
                <tr key={ index }>
                    <td>
                        <div className="shirt_and_player_name">
                            <svg className='list_shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ team_one_color }/>
                                <path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/>
                            </svg>
                            <h5>{ player.name }</h5>
                        </div>
                    </td>
                    <td>
                        <div className="shirt_and_player_name">
                            <svg className='list_shirt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <polygon points="357.3 50 326 51.3 280.7 106 256 110 226.7 106.7 182 46 11.7 123 47.7 235 112.3 217.7 119 457.7 389.7 457.7 393.7 214.3 464.3 241.7 500.3 131.7 " fill={ team_two_color }/>
                                <path d="M362.7 42.7h-53.3c0 29.4-23.9 53.3-53.3 53.3s-53.3-23.9-53.3-53.3h-53.3L0 128l42.7 117.3 64-21.3V469.3h298.7V224l64 21.3L512 128 362.7 42.7zM456.4 218.5l-44.3-14.8L384 194.4v29.6 224H128v-224 -29.6l-28.1 9.4 -44.3 14.8 -29.4-80.9L155 64h29.4c9.2 30.8 37.8 53.3 71.6 53.3 33.8 0 62.4-22.5 71.6-53.3H357l128.8 73.6L456.4 218.5z"/>
                            </svg>
                            <h5>{ team2[index].name }</h5>
                        </div>
                    </td>
                </tr>   
                ))}
            </tbody>
        </Table>
    </div>
    

) 

export default RandomisedTeams;