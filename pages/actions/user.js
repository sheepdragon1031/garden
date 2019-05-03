export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

let  login = (username, password)  => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    let  request = (user)  => { return { type: userConstants.LOGIN_REQUEST, user } }
    let  success = (user)  => { return { type: userConstants.LOGIN_SUCCESS, user } }
    let  failure = (error)  => { return { type: userConstants.LOGIN_FAILURE, error } }
}

let  logout = ()  => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

let  register = (user)  => {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    let  request = (user)  => { return { type: userConstants.REGISTER_REQUEST, user } }
    let  success = (user)  => { return { type: userConstants.REGISTER_SUCCESS, user } }
    let  failure = (error)  => { return { type: userConstants.REGISTER_FAILURE, error } }
}

let  getAll = ()  => {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    let  request = ()  => { return { type: userConstants.GETALL_REQUEST } }
    let  success = (users)  => { return { type: userConstants.GETALL_SUCCESS, users } }
    let  failure = (error)  => { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed let  name with underscore because delete is a reserved word in javascript
let  _delete = (id)  => {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    let  request = (id)  => { return { type: userConstants.DELETE_REQUEST, id } }
    let  success = (id)  => { return { type: userConstants.DELETE_SUCCESS, id } }
    let  failure = (id, error)  => { return { type: userConstants.DELETE_FAILURE, id, error } }
}