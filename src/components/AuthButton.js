/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { navToLoginAction, logoutSelectedAction } from '../actions/navigation'
import RoundedButton from './buttons/roundedButton'
import colors from '../styles/colors'

const AuthButton = ({ isLoggedIn, navToLogin, logoutSelected }) => (
  <RoundedButton
    text={isLoggedIn ? 'LOG OUT' : 'LOG IN'}
    callback={isLoggedIn ? logoutSelected : navToLogin}
    color={colors.EazeBlue}
    background={colors.CloudWhite}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logoutSelected: PropTypes.func.isRequired,
  navToLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logoutSelected: () => dispatch(logoutSelectedAction()),
  navToLogin: () => dispatch(navToLoginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
