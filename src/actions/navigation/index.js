/**
 * Created by escamilla on 3/2/18.
 */

import { NavigationActions } from 'react-navigation'

const Login = 'Login'
const Logout = 'Logout'

export function loginSelectedAction () {
  return (dispatch, getState) => {
    dispatch(NavigationActions.navigate({ routeName: Login }))
  }
}

export function logoutSelectedAction () {
  return (dispatch, getState) => {
    dispatch({ type: Logout })
  }
}
