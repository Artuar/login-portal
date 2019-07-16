import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const login = (username, password) => {    
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST, user: username });
    
        userService.login(username, password)
        .then(response => response.json())
          .then(res => {
            localStorage.setItem('user', username)
            dispatch( { type: userConstants.LOGIN_SUCCESS, user: username });
          })
          .catch(err => {
            dispatch({ type: userConstants.LOGIN_FAILURE, error: err });
          });
      };
}

const logout = () => {
    userService.logout();
    return {type: userConstants.LOGOUT}
}

function register(user) {
    return dispatch => {
        dispatch({ type: userConstants.REGISTER_REQUEST, user });
    
        userService.register(user)
        .then(response => response.json())
          .then(res => {
            dispatch( { type: userConstants.REGISTER_SUCCESS, user });
          })
          .catch(err => {
            dispatch({ type: userConstants.REGISTER_FAILURE, error: err });
          });
      };
}

export const userActions = {
    login,
    logout,
    register
};
