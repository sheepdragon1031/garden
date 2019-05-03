export const alertActions = {
    success,
    error,
    clear
};

let success = (message) => {
    return { type: alertConstants.SUCCESS, message };
}

let  error = (message) => {
    return { type: alertConstants.ERROR, message };
}

let  clear = () => {
    return { type: alertConstants.CLEAR };
}