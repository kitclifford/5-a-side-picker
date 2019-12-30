import initial from './initial';

const addPlayer = (state, action) => ({

    ...state,
    players: [...state.players, action.data]

});

const deletePlayer = (state, action) => ({

    ...state,
    players: state.players.filter((player) => player.name !== action.id)
});

const randomTeams = ( current_state ) => {
    let players = [...current_state.players];
    let team1 = [];
    let team2 = [];

    for (let i = 0; i <= 9; i += 1){

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
        default: return state;
    };
};

export default reducer;

