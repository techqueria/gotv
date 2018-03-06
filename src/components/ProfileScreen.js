/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { resetToLoginAction } from '../actions/navigation'

class ProfileScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
        <Button
          onPress={() => this.props.loginSelected()}
          title="Log in/Login Screen"
          style={styles.buttonStyling}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginSelected: () => dispatch(resetToLoginAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
