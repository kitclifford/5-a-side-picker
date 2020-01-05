export const addPlayer = (data) => {
    return {
        type: "addPlayer",
        data: data
    };
};

export const reset = () => {
    return {
        type: "reset"
    };
};

export const deletePlayer = (id) => {
    return {
        type: "deletePlayer",
        id: id
    };
};

export const generateTeams = () => {
    return {
        type: "generateTeams"
    };
};

export const changeNumberPerSide = (n) => {
    return {
        type: "changeNumberPerSide",
        numberPerSide: n
    }
}

export const teamsCustomisation = ({ playersPerSide, color_one, color_two, team_one_name, team_two_name }) =>{
    return {
    type: "teamsCustomisation",
    playersPerSide: playersPerSide,
    color_one: color_one,
    color_two: color_two,
    team_one_name: team_one_name,
    team_two_name: team_two_name
    }
}