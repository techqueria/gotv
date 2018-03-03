/**
 * Created by escamilla on 3/2/18.
 */

import { NavigationActions } from 'react-navigation'

export function loginSelectedAction () {
  return (dispatch, getState) => {
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
}
