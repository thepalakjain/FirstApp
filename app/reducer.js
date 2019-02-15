import { ADD,REMOVE,EDIT,COMPLETE,UNCOMPLETE } from './constants';

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [ ...state, action.message ];
    default:
      return state;
  }
};