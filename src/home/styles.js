import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 0.4,
  },
  buttonContainer: {
    flex: 0.6,
    backgroundColor: '#f1f1f1f1',
    paddingTop: height * 0.04,
    paddingLeft: width * 0.02,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#242C2E',
    width: width * 0.45,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: height * 0.02,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '900',
    fontSize: height * 0.02,
  },
  title: {
    color: 'black',
    fontSize: height * 0.025,
    marginBottom: height * 0.02,
    textAlign: 'left',
    fontWeight: '900',
  },
  bannerImage: {
    width: width,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  description: {
    color: 'black',
    fontSize: height * 0.018,
    fontWeight: '400',
    width: width * 0.9,
    textAlign: 'left',
    marginBottom: height * 0.02,
  },
});

export default styles;
