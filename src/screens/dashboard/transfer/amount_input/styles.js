import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backBtn: {
    marginRight: 20,
  },
  titleText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#FFF',
  },
  userWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4B57',
    marginBottom: 9,
  },
  userPhone: {
    fontFamily: 'NunitoSans-Regular',
    color: '#7A7886',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  inputAmountWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  inputAmount: {
    marginBottom: 29,
    fontSize: 48,
  },
  balanceText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7C7895',
  },
  noteWrapper: {
    minWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.6)',
  },
  noteInput: {
    marginLeft: 15,
    fontSize: 16,
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
});

export default styles;
