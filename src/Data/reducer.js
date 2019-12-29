import initial from './initial';

const addPlayer = (state, action) => ({

    ...state,
    players: [...state.players, action.data]

});

const deletePlayer = (state, action) => ({

    ...state,
    // players: [...state.players, { name: action.id} ]
    players: state.players.filter((player) => player.name !== action.id)

});

const reducer = (state, action) => {
    switch (action.type){
        case "reset": return {...initial};
        case "addPlayer": return addPlayer(state, action); 
        case "deletePlayer": return deletePlayer(state, action);
        default: return state;
    };
};

export default reducer;