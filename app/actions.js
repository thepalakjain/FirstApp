import { ADD,REMOVE,EDIT,COMPLETE,UNCOMPLETE } from './constants';

export function addTask(task) {
  return {
    type: ADD,
    task: task
  }
};