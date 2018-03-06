/**
 * Created by escamilla on 3/2/18.
 */

import { NavigationActions } from 'react-navigation'
import { setLoggedInState } from '../auth'

const Login = 'Login'
const Logout = 'Logout'
const Profile = 'Profile'
const Entry = 'Entry'

export function navToLoginAction () {
  return (dispatch, getState) => {
    dispatch(NavigationActions.navigate({ routeName: Login }))
  }
}

export function navToProfileAction () {
  return (dispatch, getState) => {
    dispatch(NavigationActions.navigate({ routeName: Profile }))
  }
}

export function resetToProfileAction () {
  return (dispatch, getState) => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: Profile }),
      ],
    }))
  }
}

export function resetToEntryAction () {
  return (dispatch, getState) => {
    dispatch(setLoggedInState(false));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: Entry }),
      ],
    }))
  }
}

// came with React Navigation Redux example code
export function loginSelectedAction () {
  return (dispatch, getState) => {
    dispatch({ type: Login })
  }
}

export function logoutSelectedAction () {
  return (dispatch, getState) => {
    dispatch({ type: Logout })
  }
}
