import React, { Component } from 'react';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';

const photoImg = require('../../../assets/779-users.png');
const forImg = require('../../../assets/777-thumbs-up.png');
const againstImg = require('../../../assets/778-thumbs-down.png');
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default class SectionListBasics extends Component {
  render() {
    // if (item.body) {
    //   commentBody = <View
    //                   style={{
    //                     // flexDirection: 'row',
    //                     height: 100,
    //                     // padding: 20,
    //                 }}>
    //                   <Text>{item.body}</Text>
    //                 </View>
    // }
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Candidates', data: [
              {name: 'Bill', photo: photoImg},
              {name: 'Mike', photo: photoImg},
            ]},
            {title: 'Community Discussion', data: [
              {name: 'Juanita', location: 'San Jose, CA', photo: photoImg, stance: forImg},
              {name: 'Justino', location: 'Richmond, CA', photo: photoImg, body: ipsum},
              {name: 'Julia', location: 'San Mateo, CA', photo: photoImg, body: ipsum},
              {name: 'Javier', location: 'San Francisco, CA', photo: photoImg, body: ipsum},
            ]},
          ]}
          // renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderItem={({item}) => 
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 100,
                  padding: 20,
              }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={item.photo}
                />
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.subitem}>{item.location}</Text>
                {item.stance && 
                  <Image
                    style={{width: 25, height: 25}}
                    source={item.stance}
                  />
                }
              </View>
              {item.body && 
                <View>
                  <Text numberOfLines={3}>{item.body}</Text>
                </View>
              }
            </View>
          }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  subitem: {
    padding: 10,
    fontSize: 14,
    height: 44,
    fontWeight: 'normal',
  },
})