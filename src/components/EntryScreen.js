/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors'
import { transparentHeaderStyle } from '../styles/navigation';

import AuthButton from './AuthButton';
import RoundedButton from '../reusableComponents/buttons/roundedButton'

class EntryScreen extends React.Component {
  componentWillMount () {
    console.log('EntryScreen componentWillMount')
  }

  componentWillUnmount () {
    console.log('EntryScreen componentWillUnmount')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
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

EntryScreen.navigationOptions = {
  // title: 'Logged Out Screen',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect()(EntryScreen);

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
