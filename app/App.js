import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import messageReducer from './reducer';
import { addTask } from './actions';
import EmptyToDo from './screens/EmptyToDo';
import ToDo from './screens/ToDo';

const store = createStore(messageReducer);

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    adding: state.adding
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewTask: (task) => {
      dispatch(addTask(task));
    }
  }
};

const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(ToDo);

export default class AppWrapper extends Component{
  render(){
    return(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    );
  }
}