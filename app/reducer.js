import { ADD,REMOVE,EDIT,COMPLETE,UNCOMPLETE } from './constants';

const defaultState = {
	tasks: [],
	adding: false
}

export default function messageReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
    	return {
      		tasks: [ ...state.tasks, action.task],
      		adding: false
      	}
    default:
      return state;
  }
};