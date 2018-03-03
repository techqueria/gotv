/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { loginSelectedAction } from '../actions/navigation'

const AuthButton = ({ logout, loginScreen, isLoggedIn, loginSelected }) => (
  <Button
    title={isLoggedIn ? 'Log Out/AuthButton' : 'Open Login Screen/AuthButton'}
    onPress={isLoggedIn ? logout : loginSelected}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginSelected: () => dispatch(loginSelectedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
