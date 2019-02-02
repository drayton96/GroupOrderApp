import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import {TestComponent} from './../components/AppComponents'
import * as firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{paddingTop:40}}>
      <Text>HELLO</Text>
      <TestComponent />
      <Button title="Signout" onPress={this.onSignoutPress} />
      </View>
    );
  };
}


const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
});
