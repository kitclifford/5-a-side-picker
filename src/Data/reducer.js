import initial from './initial';

const addPlayer = (state, action) => ({

    ...state,
    players: [...state.players, action.data]

});

const deletePlayer = (state, action) => ({

    ...state,
    players: state.players.filter((player) => player.name !== action.id)
});

// Takes an array of players and randomly splices a player and then alternates inserting them into team 1/ team 2 
const randomTeams = ( current_state ) => {
    let players = [...current_state.players];
    let team1 = [];
    let team2 = [];

    for (let i = 0; i <= ((current_state.playersPerSide * 2) - 1); i += 1){

        let rand = Math.floor(Math.random() * current_state.players.length);
        let randomPlayer = current_state.players.splice(rand, 1);

        if (current_state.players.length % 2 !== 0){
            team1 = [...team1, randomPlayer[0]];
        } else {
            team2 = [...team2, randomPlayer[0]];
        }
    }

    return [team1, team2, players];
}

const setTeams = (state, generatedTeams) => ({

    ...state,
    team1: generatedTeams[0],
    team2: generatedTeams[1],
    players: generatedTeams[2],
    teamsPicked: true

});

const teamsCustomisation = (state, action) => ({

    ...state,
    playersPerSide: action.playersPerSide,
    team_one_color: action.color_one,
    team_two_color: action.color_two,
    team_one_name: action.team_one_name,
    team_two_name: action.team_two_name

});

const reducer = (state, action) => {
    switch (action.type){
        case "reset": return {...initial};
        case "addPlayer": return addPlayer(state, action); 
        case "deletePlayer": return deletePlayer(state, action);
        case "generateTeams": { 
            const generatedTeams = randomTeams(state);
            return(setTeams(state, generatedTeams));
        }
        case "teamsCustomisation": return teamsCustomisation(state, action);
        default: return state;
    };
};

export default reducer;

