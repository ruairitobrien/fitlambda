import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDmiFHUZ2WekoxL4H07-GLhf0YUBCmABG4",
    authDomain: "fitlambda.firebaseapp.com",
    databaseURL: "https://fitlambda.firebaseio.com",
    projectId: "fitlambda",
    storageBucket: "fitlambda.appspot.com",
    messagingSenderId: "390002031891"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to FitLambda</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
