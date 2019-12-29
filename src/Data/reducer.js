import initial from './initial';

const addPlayer = (state, action) => ({

    ...state,
    players: [...state.players, action.data]

});

const reducer = (state, action) => {
    switch (action.type){
        case "reset": return {...initial};
        case "addPlayer": return addPlayer(state, action); 
        default: return state;
    };
};

export default reducer;