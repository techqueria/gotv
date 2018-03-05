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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

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
        <LoginStatusMessage />
        <AuthButton />
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Logged Out Screen',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect()(MainScreen);
