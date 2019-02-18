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
		this.handleChange = this.handleChange.bind(this);
		this.submitTask = this.submitTask.bind(this);
	}

	
	submitTask(){
		this.props.submitNewTask(this.state.text);
		this.setState({ text:'' });
    //console.log(this.state.text);
	}
	

	handleChange(event){
		this.setState({
			text: event.target.value
		});
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
          		onChange= {this.handleChange}
          		onSubmitEditing={this.submitTask}
        		/>
        		{/*this.props.tasks.map((task) => (<Text key={task} style={styles.task}>{task}</Text>))*/}
    		</View>
    	);
  	}
}