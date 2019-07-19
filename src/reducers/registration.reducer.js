import { userConstants } from '../constants';

const defaultState = {};

export function registration(state = defaultState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return { registered: true };
    case userConstants.REGISTER_FAILURE:
      return { failure: true };
    default:
      return state
  }
}