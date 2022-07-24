import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#242C2E',
    width: width * 0.5,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    borderRadius: 5,
  },
  label: {
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: height * 0.03,
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
  },
});

export default styles;
