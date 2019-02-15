import { ADD,REMOVE,EDIT,COMPLETE,UNCOMPLETE } from './constants';

export function addMessage(message) {
  return {
    type: ADD,
    message: message
  }
};