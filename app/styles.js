import { styleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
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
  }
});
