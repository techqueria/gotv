/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import EntryScreen from '../screens/EntryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FriendScreen from '../screens/FriendScreen';
import EventScreen from '../screens/EventScreen';
import { addListener } from './redux';

export const LoginNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Entry: { screen: EntryScreen },
  Profile: { screen: ProfileScreen },
});
export const AppNavigator = TabNavigator({
  Login: LoginNavigator,
  Friends: { screen: FriendScreen },
  Cafecitos: { screen: EventScreen },
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
