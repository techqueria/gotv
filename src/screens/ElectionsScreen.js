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
import ElectionScroll from '../components/electionScroll/electionScroll'
import { logInCheckAction } from '../actions/auth/index'

class ElectionScreen extends React.Component {

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
            <Text style={styles.item}>Upcoming Elections</Text>
            <Text
              style={styles.text}
            >
              This position has responsibility over xyz...
            </Text>
            <ElectionScroll
              onPress={() => this.props.electionClick()}
            />
          </ScrollView>
          <Loader
            modalVisible={this.state.loadingVisible}
            animationType="fade"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginCheck: (email, password) => dispatch(logInCheckAction(email, password)),
  navToProfile: () => dispatch(resetToProfileAction()),
  electionClick: (id) => dispatch(navToRaceAction(id))
});

ElectionScreen.propTypes = {
  loginCheck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

ElectionScreen.navigationOptions = {
  title: 'Elections',
  headerTintColor: colors.CloudWhite,
  headerStyle: transparentHeaderStyle
};

export default connect(mapStateToProps, mapDispatchToProps)(ElectionScreen);

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



