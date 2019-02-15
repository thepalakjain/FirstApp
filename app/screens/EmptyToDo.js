import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { AddButton } from '../components/Buttons';

export default class EmptyToDo extends Component {
  render() {
    return (
      <View style= {styles.empty}>
        <AddButton />
      </View>
    );
  }
}
