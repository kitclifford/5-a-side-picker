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

