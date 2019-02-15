import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  empty: {
    flex: 1,
    backgroundColor: '#ffe9d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#636b77',
    padding: 10,
    shadowColor: '#6d6262',
    shadowOffset: { height: 1, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#f7fbff',
    fontSize: 25,
  },
  list: {
    flex: 1,
    backgroundColor: '#ffe9d1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  vSpacer: {
    height: 70,
  },
  task: {
    padding: 10,
    fontSize: 25,
  },
  roundButton: {
    alignItems: 'center',
    backgroundColor: '#636b77',
    padding: 10,
    shadowColor: '#6d6262',
    shadowOffset: { height: 1, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
