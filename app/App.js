import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5FCFF"}}>
        <Text>Hello oo world!</Text>
        <Button title="Button!" color="#F51C11" />
      </View>
    );
  }
}
