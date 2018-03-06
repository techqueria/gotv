/**
 * Created by escamilla on 3/4/18.
 */

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Entry screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Entry');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  // TODO: Determine logged in state versus first time login, this is from base redux react navigation example, we will re-write this reducer
  // secondAction,
  // tempNavState
  firstAction
);

export function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
