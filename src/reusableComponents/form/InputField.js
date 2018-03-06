
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(0),
      secureInput: this.props.inputType === 'text' || this.props.inputType === 'email' ? false : true,
    }
  }

  scale(value) {
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack
      }
    ).start();
  }

  togglePasswordShow() {
    this.setState({
      secureInput: !this.state.secureInput,
    });
  }

  render() {
    let keyboardType = this.props.inputType === 'email' ? 'email-address' : 'default';

    const iconScale = this.state.scaleValue.interpolate({
      inputRange: [0, 0.5,  1],
      outputRange: [0, 1.6, 1]
    });

    const scaleValue = this.props.showCheckmark ? 1 : 0;
    this.scale(scaleValue);

    return (
      <View style={[this.props.customStyle,styles.wrapper]}>
        <Text
          style={[{color: this.props.labelColor, fontSize: this.props.labelTextSize}, styles.label]}
          keyboardType={keyboardType}
        >
          {this.props.labelText}
        </Text>
        {this.props.inputType === 'password' &&
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => this.togglePasswordShow()}
        >
          <Text style={styles.showButtonText}>
            {this.state.secureInput ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
        }
        <Animated.View style={{transform: [ {scale: iconScale} ], position: 'absolute', right: 0, bottom: 6}}>
          <Icon
            name="check"
            color={colors.OffWhite}
            size={20}
          />
        </Animated.View>
        <TextInput
          style={[{color: this.props.textColor, borderBottomColor: this.props.inputBorderColor}, styles.inputField]}
          secureTextEntry={this.state.secureInput}
          onChange={(event) => this.props.onChangeText(event.nativeEvent.text)}
          autoCapitalize={this.props.autoCapitalize ? 'sentences' : 'none'}
          autoFocus={this.props.autoFocus || false}
          autoCorrect={false}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  customStyle: PropTypes.object,
  textColor: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  inputType: PropTypes.string,
  showCheckmark: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  autoCapitalize: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  label: {
    fontWeight: '700',
    marginBottom: 10,
  },
  showButton: {
    position: 'absolute',
    right: 0,
  },
  showButtonText: {
    color: colors.OffWhite,
    fontWeight: '700',
  }
});
