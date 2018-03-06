/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { navToProfileAction } from '../actions/navigation'
import colors from '../styles/colors'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.CloudWhite
  },
});

const LoginStatusMessage = ({ isLoggedIn, navToProfile }) => {
  if (!isLoggedIn) {
    return <Text style={styles.welcome} >Login or Signup</Text>;
  }

  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
      <Button
        onPress={() => navToProfile()}
        title="Profile"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  navToProfile: () => dispatch(navToProfileAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginStatusMessage);
