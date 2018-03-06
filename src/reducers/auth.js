/**
 * Created by escamilla on 3/4/18.
 */

import t from '../actions/auth/actionTypes'

const initialAuthState = { isLoggedIn: false };

export function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    case t.SET_LOGGED_IN_STATE:
      return Object.assign({}, state, {
        isLoggedIn: action.loggedInState
      })
    default:
      return state;
  }
}
