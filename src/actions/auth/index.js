
import t from './actionTypes'
import user from '../../data/user.json';

export function logInCheckAction(email, password) {
  return (dispatch, getState) => {
    if (email === user.email) {
      dispatch(setLoggedInState(true));
      return true;
    } else {
      dispatch(setLoggedInState(false));
      return false;
    }
  }
}

export function setLoggedInState(loggedInState) {
  return {
    type: t.SET_LOGGED_IN_STATE,
    loggedInState,
  }
}
