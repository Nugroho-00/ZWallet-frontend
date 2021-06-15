import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    paddingVertical: '15%',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 26,
    color: 'rgba(99, 121, 244, 1)',
  },
  profilepicture: {
    height: 140,
    width: 140,
    borderRadius: 10,
    marginVertical: '5%',
  },
  btngroup: {
    flexDirection: 'row',
  },
  btncontainer: {
    flex: 1,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnprimary: {
    paddingVertical: 12,
    marginVertical: 8,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(99, 121, 244, 1)',
  },
  btnsecondary: {
    paddingVertical: 12,
    marginVertical: 8,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(218, 218, 218, 1)',
  },
  btntextprimary: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  btntextsecondary: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
    color: 'rgba(136, 136, 143, 1)',
  },
  inputgroup: {
    marginTop: 0,
    marginBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 8,
    top: -10,
    paddingLeft: 2,
    paddingRight: 2,
    zIndex: 10,
  },
  inputlabel: {
    justifyContent: 'center',
    color: '#ADA9BB',
    fontFamily: 'Kanit-Regular',
  },
  inputbox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black',
  },
  warning: {
    position: 'absolute',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  inputwarning: {
    paddingLeft: '2%',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});

export default styles;
