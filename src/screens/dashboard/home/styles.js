import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  font: {
    fontFamily: 'NunitoSans-Regular',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#6379F4',
  },
  balanceTitle: {
    fontSize: 14,
    color: '#D0D0D0',
    marginBottom: 10,
  },
  balanceCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnTransactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  btnTransaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 16,
    backgroundColor: '#EAEDFF',
    borderRadius: 10,
  },
  btnTransactionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#514F5B',
  },
  historyTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 25,
  },
  historyListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFF',
  },
});

export default styles;
