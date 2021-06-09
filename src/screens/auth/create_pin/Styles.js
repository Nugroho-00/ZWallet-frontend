import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    height: '70%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 4,
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
    marginTop: 20,
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

  errorMessage: {
    marginTop: 10,
    color: '#EB4335',
  },

  successIcon: {
    marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#1EC15F',
    justifyContent: 'center',
  },
  checkmark: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 40,
  },
});

export default styles;
