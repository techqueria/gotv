/**
 * Created by escamilla on 3/4/18.
 */

import { nav } from '../reducers/navigate'
import { auth } from '../reducers/auth'
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
