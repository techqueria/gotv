/**
 * Created by escamilla on 3/2/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DatePickerIOS } from 'react-native';
import { resetToEntryAction } from '../actions/navigation/index'

class EventScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cafecitos
        </Text>
        <DatePickerExample />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logoutSelected: () => dispatch(resetToEntryAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);

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


//   componentDidMount() {
//     let dataSource = this.state.dataSource.cloneWithRowsAndSections({
//       DatePickerIOS: [this._renderDatePicker],
//     });
// 
//     this.setState({ dataSource });
//   }
// 
// _renderDatePicker = () => {
//     return <DatePickerExample />;
//   };

class DatePickerExample extends React.Component {
  state = {
    date: new Date(),
    timeZoneOffsetInHours: -1 * new Date().getTimezoneOffset() / 60,
  };

  render() {
    return (
      <DatePickerIOS
        date={this.state.date}
        mode="datetime"
        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
        onDateChange={this._onDateChange}
      />
    );
  }

  _onDateChange = date => {
    this.setState({ date });
  };
}
