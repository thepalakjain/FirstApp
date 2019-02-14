import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default class EmptyToDo extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
         <Text style={styles.buttonText} > + Add something </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
  	alignItems: 'center',
    backgroundColor: '#636b77',
    padding: 10,
    shadowColor: '#6d6262',
    shadowOffset: { height: 1, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
  	color: '#f7fbff',
  	fontSize: 25,
  }
});
