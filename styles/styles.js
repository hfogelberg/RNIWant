import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10
  },
  comment: {

  },
  textLabel: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  multiline: {
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    height: 200
  },
  datePicker: {
    alignSelf: 'stretch',
  },
  picker: {
    alignSelf: 'stretch',
    marginTop: 10
  },
  line: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    fontSize: 20,
    color: 'green'
  },
  disabledButton: {
    color: 'red'
  }
});
