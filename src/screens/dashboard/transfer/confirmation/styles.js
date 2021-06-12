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
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  balanceWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoWrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  noteWrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  infoTitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
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
