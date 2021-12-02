import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 10,
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  main: {
    flex: 4,
    width: '100%',
    backgroundColor: 'green',
  },
  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  textMedium: {
    fontSize: 40,
    color: 'white',
  },
});
