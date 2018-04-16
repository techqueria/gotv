/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Image, KeyboardAvoidingView, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors/index'
import { transparentHeaderStyle } from '../styles/navigation/index';
import InputField from '../components/form/InputField'
import Loader from '../components/loadingSpinner/Loader'
import NextArrowButtom from '../components/buttons/nextArrowButton'
import CommentScroll from '../components/commentScroll/commentScroll'
import { logInCheckAction } from '../actions/auth/index'
import { resetToEntryAction } from '../actions/navigation/index'

class FriendScreen extends React.Component {

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
            scrollEventThrottle={16}
          >
            <Image
              style={{width: 150, height: 150}}
              source={require('../../assets/779-users.png')}
            />
            <Text
              style={styles.text}
            >
              Test
            </Text>
            <CommentScroll/>            
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
        navToProfile()
      } else {
        this.setState({
          loadingVisible: false,
          formStatus: 'invalid',
        });
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

FriendScreen.propTypes = {
  loginCheck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

FriendScreen.navigationOptions = {
  title: 'Friends',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendScreen);

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
    marginTop: 100,
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
  },
  text: {
    color: colors.OffWhite,
    fontSize: 14,
  }
});
