
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class RoundedButton extends Component {
  render() {
    const underlayColor = this.props.background ? this.props.background : 'transparent'
    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={[{backgroundColor: underlayColor}, styles.wrapper]}
        onPress={ () => { this.props.callback() } }
      >
        <View style={styles.buttonTextContainer}>
          {this.props.icon}
          <Text style={[{color: this.props.color}, styles.buttonText]}>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
};

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});
