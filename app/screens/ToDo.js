import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles';
import { AddButton, PlusButton } from '../components/Buttons';

export default class ToDo extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.submitTask = this.submitTask.bind(this);
	}

	
	submitTask(){
		this.props.submitNewTask(this.state.text);
		this.setState({ text:'' });
	}

	render() {
    	return (
    		<View style= {styles.list}>
    			<View style = {styles.vSpacer} />
    			{/*}
    			<View height = {40} style={{flexDirection: 'row'}}>
    			<TextInput
    			fontSize = {25}
    			padding = {20}
          		placeholder="Type your task here."
          		enablesReturnKeyAutomatically = {true}
          		text = {this.state.text}
          		onChange= {this.handleChange}
          		onSubmitEditing={this.submitTask}
        		/>
        		<PlusButton/>
        		</View>
        		*/}
        		<TextInput
    			fontSize = {25}
    			padding = {20}
          		placeholder="Type your task here."
          		enablesReturnKeyAutomatically = {true}
          		text = {this.state.text}
          		onChangeText= {(txt) => this.setState({text:txt})}
          		onSubmitEditing={this.submitTask}
        		/>
        		{this.props.tasks.map((task) => (<Text style={styles.task}>{task}</Text>))}
    		</View>
    	);
  	}
}