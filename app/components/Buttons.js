import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export class AddButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
        	<Text style={styles.buttonText} > + Add a task </Text>
        </TouchableOpacity>
    );
  }
}

export class PlusButton extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.roundButton} activeOpacity={0.8}>
        	<Text style={styles.buttonText} > + </Text>
        	</TouchableOpacity>
		);
	}
}
