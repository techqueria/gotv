/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors'
import { transparentHeaderStyle } from '../styles/navigation';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';
import RoundedButton from '../reusableComponents/buttons/roundedButton'

class MainScreen extends React.Component {
  componentWillMount () {
    console.log('MainScreen componentWillMount')
  }

  componentWillUnmount () {
    console.log('MainScreen componentWillUnmount')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
          <LoginStatusMessage />
          <AuthButton />
          <RoundedButton
            text="SIGN UP"
            callback={this.createAccount}
            color={colors.CloudWhite}
          />
        </View>
      </View>
    )
  }

  createAccount() {
    alert('Create account pressed');
  }
}

MainScreen.navigationOptions = {
  // title: 'Logged Out Screen',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect()(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.EazeBlue,
  },
  welcomeWrapper: {
    flex: 1,
    marginTop: 230,
    padding: 20,
  },
});
