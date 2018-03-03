/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { loginSelectedAction, logoutSelectedAction } from '../actions/navigation'

const AuthButton = ({ isLoggedIn, loginSelected, logoutSelected }) => (
  <Button
    title={isLoggedIn ? 'Log Out/AuthButton' : 'Open Login Screen/AuthButton'}
    onPress={isLoggedIn ? logoutSelected : loginSelected}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logoutSelected: PropTypes.func.isRequired,
  loginSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logoutSelected: () => dispatch(logoutSelectedAction()),
  loginSelected: () => dispatch(loginSelectedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
