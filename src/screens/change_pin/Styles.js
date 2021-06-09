import {StyleSheet} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    color: '#3A3D42',
    fontSize: 24,
    paddingTop: 25,
  },
  content: {
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    color: '#3A3D42',
    opacity: 0.6,
    fontSize: 16,
    paddingTop: 15,
  },

  pinGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  input: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 24,
    textAlign: 'center',
    width: Dimensions.get('window').width / 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },

  buttonOn: {
    backgroundColor: '#6379F4',
    height: 50,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    position: 'absolute',
    marginHorizontal: 15,
    bottom: 40,
  },

  buttonOff: {
    backgroundColor: '#DADADA',
    height: 50,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    position: 'absolute',
    marginHorizontal: 15,
    bottom: 40,
  },

  textOn: {
    color: '#FFFFFF',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  textOff: {
    color: '#88888F',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
