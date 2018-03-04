/**
 * Created by escamilla on 3/2/18.
 */

import { NavigationActions } from 'react-navigation'

const Login = 'Login'
const Logout = 'Logout'
const Profile = 'Profile'

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
