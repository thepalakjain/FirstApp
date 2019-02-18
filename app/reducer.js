import { ADD,REMOVE,EDIT,COMPLETE,UNCOMPLETE } from './constants';

const defaultState = {
	tasks: [],
	adding: false
}

export default function messageReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      console.log("adding:/n");
      console.log(action.task);
    	return {
      		tasks: [ ...state.tasks, action.task],
      		adding: false
      	}
    default:
      return state;
  }
};