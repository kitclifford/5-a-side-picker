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