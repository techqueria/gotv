/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors'
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../reusableComponents/form/InputField'
import Loader from '../reusableComponents/loadingSpinner/Loader'
import NextArrowButtom from '../reusableComponents/buttons/nextArrowButton'
import { logInCheckAction } from '../actions/auth'
import { resetToProfileAction } from '../actions/navigation'

class LoginScreen extends React.Component {

  // COMPONENT LIFE CYCLE METHODS

  constructor(props) {
    super(props)
    this.state = {
      topBorderColor: 'transparent',
      formStatus: 'valid',
      validEmail: false,
      emailAddress: '',
      validPassword: false,
      loadingVisible: false,

    }
  }

  componentWillMount () {
    console.log('LoginScreen componentWillMount')
  }

  componentWillUnmount () {
    console.log('LoginScreen componentWillUnmount')
  }

  render () {
    const background = this.state.formStatus === 'valid' ? colors.EazeBlue : colors.FuegoRed
    const showNotification = this.state.formStatus === 'valid' ? false : true
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={[{backgroundColor: background}, styles.wrapper]}
      >
        <View style={styles.container}>
          <ScrollView
            style={styles.formWrapper}
            onScroll={console.log('scrollview')}
            scrollEventThrottle={16}
          >
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.OffWhite}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.OffWhite}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="email"
              showCheckmark={this.state.validEmail}
              onChangeText={this.onEmailChange}
              autoFocus={true}
            />
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.OffWhite}
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.OffWhite}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="password"
              showCheckmark={this.state.validPassword}
              onChangeText={this.onPasswordChange}
            />
            <View style={styles.nextButton}>
              <NextArrowButtom
                disabled={this.toggleNextButtonState()}
                callback={this.goToNextStep}
              />
            </View>
          </ScrollView>
          <Loader
            modalVisible={this.state.loadingVisible}
            animationType="fade"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

  // HELPER METHDOS

  onEmailChange = (text) => {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({
      emailAddress: text
    });
    if (!this.state.validEmail) {
      if (emailCheckRegex.test(text)) {
        this.setState({
          validEmail: true
        });
      }
    } else {
      if (!emailCheckRegex.test(text)) {
        this.setState({
          validEmail: false
        });
      }
    }
  }

  onPasswordChange = (text) => {
    if (!this.state.validPassword) {
      if (text.length > 4) {
        this.setState({
          validPassword: true
        });
      }
    } else {
      if (text.length <= 4) {
        this.setState({
          validPassword: false
        });
      }
    }
  }

  toggleNextButtonState = () => {
    if (this.state.validEmail && this.state.validPassword) {
      return false;
    } else if (!this.state.validEmail || !this.state.validPassword) {
      return true;
    }
    return true;
  }

  goToNextStep = () => {
    const { navToProfile } = this.props
    this.setState({loadingVisible: true});
    // Fake slow response to show loading screen
    setTimeout(() => {
      if (this.props.loginCheck(this.state.emailAddress, '')) {
        this.setState({
          loadingVisible: false,
          formStatus: 'valid',
        });
        console.log('*** email & password validation succeeded')
        navToProfile()
      } else {
        this.setState({
          loadingVisible: false,
          formStatus: 'invalid',
        });
        console.log('*** email & password validation failed')
      }
    },1000);
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginCheck: (email, password) => dispatch(logInCheckAction(email, password)),
  navToProfile: () => dispatch(resetToProfileAction())
});

LoginScreen.propTypes = {
  loginCheck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.EazeBlue,
  },
  buttonStyling: {
    marginBottom: 10,
  },
  formWrapper: {
    marginTop: 200,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 1,
  },
  nextButton: {
    top: 0,
    marginTop: 0,
    alignItems: 'flex-end',
    right: 20,
  }
});
