import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import messageReducer from './reducer';
import { addMessage } from './actions';
import EmptyToDo from './screens/EmptyToDo';

const store = createStore(messageReducer);

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(EmptyToDo);

export default class AppWrapper extends Component{
  render(){
    return(
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    );
  }
}


