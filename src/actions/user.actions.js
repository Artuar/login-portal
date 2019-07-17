import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export function login (username, password) {   
  return function (dispatch) {
    dispatch({ type: userConstants.LOGIN_REQUEST, user: username });
    return userService.login(username, password).then(
      res => {
        history.push('/');
        dispatch({ type: userConstants.LOGIN_SUCCESS, user: username });
      },
      err => {
        console.log('err', err);
        return dispatch({ type: userConstants.LOGIN_FAILURE, error: err })
      }
    );
  }; 
}

function logout () {
  userService.logout();
  return {type: userConstants.LOGOUT};
}

function register(user) {
      return function (dispatch) {
        dispatch({ type: userConstants.REGISTER_REQUEST, user: user.username });
        return userService.register(user).then(
          res => {
            history.push('/login');
            dispatch({ type: userConstants.REGISTER_SUCCESS, user: user.username });
          },
          err => {
            return dispatch({ type: userConstants.REGISTER_FAILURE, error: err })
          }
        );
      };
}

export const userActions = {
    login,
    logout,
    register
};
