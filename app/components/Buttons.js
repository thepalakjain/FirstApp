import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export class AddButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        	<Text style={styles.buttonText} > + Add a task </Text>
        </TouchableOpacity>
    );
  }
}

