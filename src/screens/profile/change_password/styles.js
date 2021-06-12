import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    paddingBottom: 25,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    marginRight: 20,
  },
  titleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#FFF',
  },
  contentWrapper: {
    paddingVertical: 40,
  },
  textDescriptionWrapper: {
    paddingHorizontal: 16,
    marginBottom: 53,
    alignItems: 'center',
  },
  textDescription: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginBottom: '10%',
  },
  lefticon: {
    position: 'absolute',
    left: 5,
    justifyContent: 'center',
    zIndex: 10,
  },
  inputbox: {
    width: '100%',
    paddingLeft: '14%',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'black',
  },
  righticon: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    zIndex: 10,
  },
  btnContinue: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#6379F4',
    borderRadius: 12,
  },
  textContinue: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnWrapper: {
    paddingHorizontal: 16,
    marginTop: 170,
  },
});

export default styles;
